import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts, deletePost } from "../../redux/action-creators";
import { VscEmptyWindow } from "react-icons/vsc";
import PostCard from "./PostCard";

export default function Posts() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);
  

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  if (posts.length === 0) return (
    <div className="flex flex-col justify-center items-center text-white">
      <VscEmptyWindow className="text-9xl" />
      <h1 className="text-xl">There are no posts</h1>

    </div> 
  );

  return (
    <div >
      <PostCard posts={posts} deletePost={deletePost}/>
    </div>
  );
}
