import { v2 as cloudinary } from "cloudinary";
import { CLOUD_API_KEY, CLOUD_NAME, CLOUD_API_SECRET } from "../config.js";

cloudinary.config({
  cloud_name: CLOUD_NAME,
  api_key: CLOUD_API_KEY,
  api_secret: CLOUD_API_SECRET,
});

export const uploadImage = (filePath) => {
  return cloudinary.uploader
    .upload(filePath, {
      folder: "merndb",
    })
    .then((file) => file);
};

export const deletedImage = (public_id) => {
  return cloudinary.uploader.destroy(public_id).then((result) => result);
};
