import React from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";


export default function PostCard({ posts, deletePost }) {
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    toast(
      (t) => (
        <div>
          <p className="text-white">
            Do you want to delete <strong>{id}</strong>?
          </p>
          <div>
            <button
              className="bg-red-500 hover:bg-red-400 px-3 py-2 text-sm text-white rounded-sm mx-2"
              onClick={() => {
                dispatch(deletePost(id));
                toast.dismiss(t.id);
              }}
            >
              Delete
            </button>
            <button
              className="bg-slate-400 hover:bg-slate-500 px-3 py-2 text-white rounded-sm mx-2"
              onClick={() => toast.dismiss(t.id)}
            >
              Cancel
            </button>
          </div>
        </div>
      ),
      {
        style: {
          background: "#202020",
        },
      }
    );
  };

  return (
    <div className="grid grid-cols-3 gap-2">
      {posts.map((post) => (
        <div
          key={post._id}
          className="bg-zinc-600 text-white rounded-sm shadow-md shadow-black hover:bg-zinc-700 hover:cursor-pointer px-4 py-7"
        >
          <div className="flex justify-between">
            <h2>{post.title}</h2>
            <button
              className="bg-red-600 text-sm px-2 py-1 rounded-sm"
              onClick={() => {
                handleDelete(post._id);
              }}
            >
              Delete
            </button>
          </div>
          <p>{post.description}</p>
          <img
            hidden={!post.image}
            className="h-96"
            src={post.image?.url}
            alt="not found"
          />
        </div>
      ))}
    </div>
  );
}
