"use client";
import { useState, useEffect, useLayoutEffect } from "react";
import axios from "axios";

export default function Home() {
  const [isPostsLoading, setPostsLoadingState] = useState(true);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    console.log("browser painted");

    axios.get("https://dummyjson.com/posts").then((response) => {
      setPostsLoadingState(false);
      setPosts(response.data.posts);
    });
  }, []);

  return (
    <div>
      <h1 className='bg-red-500'>Learning Axios!</h1>
      {isPostsLoading ? (
        <h1>Loading posts...</h1>
      ) : (
        posts.map((items, index) => {
          return (
            <p key={index}>
              {index} - {items.title}
            </p>
          );
        })
      )}
    </div>
  );
}
