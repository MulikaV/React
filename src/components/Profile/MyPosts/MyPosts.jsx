import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import MyPostsForm from "./MyPostsForm";

const MyPosts = (props) => {


  const addNewPost = (value) => {
    debugger;
    props.addNewPost(value.newPostText);
  };

  const postsElements = props.posts
    .map(el => <Post text={el.message} key={el.id} likesCount={el.likesCount}/>);

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <MyPostsForm onSubmit={addNewPost}/>
      <div className={s.posts}>
        {postsElements}
      </div>
    </div>
  )
};

export default MyPosts;