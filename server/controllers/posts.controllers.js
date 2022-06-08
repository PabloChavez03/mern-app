import Post from "../models/Post.js";
import { uploadImage, deletedImage } from "../libs/cloudinary.js";
import fs from "fs-extra";

export const getPosts = (req, res) => {
  Post.find()
    .then((posts) => {
      res.json(posts);
    })
    .catch((err) => res.status(500).json({ message: err.message }));
};

export const getPost = (req, res) => {
  const { id } = req.params;
  Post.findById(id)
    .then((post) => {
      post
        ? res.status(200).json(post)
        : res.status(404).json({ message: "Post not found" });
    })
    .catch((err) => res.status(500).json({ message: err.message }));
};

export const createPost = async (req, res) => {
  const { title, description } = req.body;
  const { image } = req.files;

  let imageUrl;
  try {
    if (image) {
      const { secure_url, public_id } = await uploadImage(image.tempFilePath);
      await fs.remove(image.tempFilePath);

      imageUrl = {
        url: secure_url,
        public_id,
      };
    }

    const newPost = new Post({ title, description, image: imageUrl });

    await newPost.save();

    return res.status(201).json(newPost);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updatePost = (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;
  Post.findByIdAndUpdate(id, { title, description }, { new: true })
    .then((post) => res.status(200).json(post))
    .catch((err) => res.status(404).json({ error: `This error:${err}` }));
};

export const deletePost = (req, res) => {
  const { id } = req.params;
  Post.findByIdAndDelete(id)
    .then((postRemove) => {
      if (!postRemove)
        return res
          .status(409)
          .json({ message: "You have already deleted the post" });

      if (postRemove.image.public_id) {
        deletedImage(postRemove.image.public_id)
          .then()
          .catch((err) => err.message);
      }
      return res.status(200).json({ message: "Post deleted" });
    })
    .catch((err) => res.status(500).json({ message: err.message }));
};
