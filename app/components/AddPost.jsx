"use client";
import { useState } from "react";
import React from "react";
import Modal from "./Modal";
import axios from "axios";
import { useRouter } from "next/navigation";


const AddPost = () => {
  const router = useRouter()
  const [showModal, setShowModal] = useState(false);
  const [input, setInput] = useState({title: "", actors: "", year: ""});

  const handleSubmit = (e) => {
    e.preventDefault();

    // movie object
    const movie = {
      ...input,
      year: parseInt(input.year),
    }
    axios
      .post("api/posts", input)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setInput({title: "", actors: "", year: ""}); //Reset?
        setShowModal(false);
        router.refresh()
      });
  };
  const handleChange = (e) => {
    const { name, value } = e.target
    setInput((prevState)=>({...prevState, [name]: value}));
  };
  return (
    <div>
      <button
        className="bg-blue-600 text-white p-3 cursor-pointer"
        onClick={() => setShowModal(true)}
      >
        Add a New Post
      </button>
      <Modal showModal={showModal} setShowModal={setShowModal}>
        <form className="w-full px-5 pb-6" onSubmit={handleSubmit}>

          <h1 className="font-bold">Add or Update a Post</h1>

          <input
            type="text"
            placeholder="Title"
            name="title"
            className="w-full p-3 my-3"
            value={input.title}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Actors"
            name="actors"
            className="w-full p-3 my-3"
            value={input.actors}
            onChange={handleChange}
          />
          <input
            type="number"
            placeholder="Release Year"
            name="year"
            className="w-full p-3 my-3"
            value={input.year}
            onChange={handleChange}
          />
          <button type="submit" className="bg-yellow-600 text-white px-5 py-2">
            Submit
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default AddPost;
