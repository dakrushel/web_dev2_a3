"use client";

import React, { useState } from "react";
import Modal from "./Modal";
import axios from "axios";

const Post = ({ post, fetchPosts }) => {
  const [showModalEdit, setShowModalEdit] = useState(false);
  const [postToEdit, setPostToEdit] = useState({
    id: post?.id || "",
    title: post?.title || "",
    actors: post?.actors || "",
    year: post?.year || "",
  });

  const [showModalDelete, setShowModalDelete] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPostToEdit((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!postToEdit.id) {
      console.error("No ID provided for the post to edit");
      return;
    }

    axios
      .patch(`/api/posts/${postToEdit.id}`, postToEdit)
      .then(() => {
        setShowModalEdit(false);
        fetchPosts(); // Trigger re-fetch of posts
      })
      .catch((err) => console.error("Error updating post:", err));
  };

  const handleDeletePost = (id) => {
    axios
      .delete(`/api/posts/${id}`)
      .then(() => {
        setShowModalDelete(false);
        fetchPosts(); // Trigger re-fetch of posts
      })
      .catch((err) => console.error("Error deleting post:", err));
  };

  return (
    <li className="p-3 my-5 bg-stone-200 text-stone-500" key={post.id}>
      <h1 className="font-bold">Title: {post.title}</h1>
      <p>Actors: {post.actors}</p>
      <p>Release Year: {post.year}</p>

      <button
        className="text-blue-600 mr-5"
        onClick={() => setShowModalEdit(true)}
      >
        Edit
      </button>

      <Modal showModal={showModalEdit} setShowModal={setShowModalEdit}>
        <form className="w-full px-5 pb-6" onSubmit={handleSubmit}>
          <h1 className="font-bold">Edit Post</h1>
          <input
            type="text"
            placeholder="Title"
            name="title"
            className="w-full p-3 my-3"
            value={postToEdit.title}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Actors"
            name="actors"
            className="w-full p-3 my-3"
            value={postToEdit.actors}
            onChange={handleChange}
          />
          <input
            type="number"
            placeholder="Release Year"
            name="year"
            className="w-full p-3 my-3"
            value={postToEdit.year}
            onChange={handleChange}
          />
          <button type="submit" className="bg-red-400 text-white px-5 py-2">
            Submit
          </button>
        </form>
      </Modal>

      <button
        className="text-red-400 p-2"
        onClick={() => setShowModalDelete(true)}
      >
        Delete
      </button>

      <Modal showModal={showModalDelete} setShowModal={setShowModalDelete}>
        <div className="flex flex-col justify-start space-y-4">
          <h2 className="text-center text-lg font-bold">
            Are you sure you want to delete this post?
          </h2>
        </div>
        <div className="flex justify-end w-full space-x-3">
          <button
            className="bg-green-500 text-white p-2 mr-5"
            onClick={() => handleDeletePost(post.id)}
          >
            Yes
          </button>
          <button
            className="bg-red-500 text-white p-2"
            onClick={() => setShowModalDelete(false)}
          >
            No
          </button>
        </div>
      </Modal>
    </li>
  );
};

export default Post;
