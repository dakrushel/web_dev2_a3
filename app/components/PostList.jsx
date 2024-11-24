// import React from 'react'
// import Post from './Post'
//   const PostList = ({posts = [] }) => {
//   return (
//     <ul className='p-5'>
//         {posts.map((post) => (
//          <Post key={post.id} post={post} />
//         ))}
//     </ul>
//   );
// };

// export default PostList;

import React, { useState, useEffect } from "react";
import axios from "axios";
import Post from "./Post";

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
    fetchPosts();
  }, []);

  return (
    <ul>
      {posts.map((post) => (
        <Post key={post.id} post={post} fetchPosts={fetchPosts} />
      ))}
    </ul>
  );
};

export default PostList;
