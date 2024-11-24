import React, { useState, useEffect } from "react";
import axios from "axios";
import Post from "./Post";
import AddPost from "./AddPost";

const PostList = () => {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    try {
      const res = await axios.get("/api/posts");
      setPosts(res.data);
    } catch (err) {
      console.error("Error fetching posts:", err.message);
    }
  };

  useEffect(() => {
    fetchPosts(); // Fetch posts on initial load
  }, []);

  return (
    <div>
      <AddPost fetchPosts={fetchPosts} />
      <ul>
      {posts.map((post) => (
        <Post key={post.id} post={post} fetchPosts={fetchPosts} />
      ))}
    </ul>
    </div>
  );
};

export default PostList;
