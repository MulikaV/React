import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div>
      My posts
      <div>
        <textarea></textarea>
        <button>Add post</button>
        <button>Delete post</button>
      </div>
      <div className={s.posts}>
        <Post text="My first post"/>
        <Post text="Wow It's working"/>

      </div>
    </div>
  )
};

export default MyPosts;