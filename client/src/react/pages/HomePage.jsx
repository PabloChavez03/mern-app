import React from "react";
import { Link } from "react-router-dom";
import Posts from "../components/Posts";
// import { textFont } from '../styles/index.styles'

export default function HomePage() {
  return (
    <div className="flex flex-col justify-center items-center">
      <Posts />
      <Link
        to="/form"
        className="flex flex-col justify-center items-center text-white text-xl border border-white rounded-lg w-1/6 m-4 p-4 hover:bg-gray-600"
      >
        Create new post
      </Link>
    </div>
  );
}
