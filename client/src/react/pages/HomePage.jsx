import React from "react";
import { Link } from "react-router-dom";
import Posts from "../components/Posts";
import { useSelector } from "react-redux";
// import { textFont } from '../styles/index.styles'

export default function HomePage() {
  const posts = useSelector((state) => state.posts);
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-gray-400 font-bold m-auto text-2xl h-auto px-8 py-4">Posts: {posts.length}</h1>
      <Posts />
      <Link
        to="/form"
        className="px-3 py-2 bg-indigo-500  hover:bg-indigo-600  text-white my-6 rounded-md"
      >
        Create new post
      </Link>
    </div>
  );
}
