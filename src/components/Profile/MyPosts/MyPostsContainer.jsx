import React from 'react';
import {addNewPostAC, updateNewPostTextAC} from "../../../Redux/profile-reducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {

  const state = props.store.getState().profilePage;
  const addPost = () => {
    props.store.dispatch(addNewPostAC());
  };

  const onPostChange = (text) => {
    props.store.dispatch(updateNewPostTextAC(text));
  };

  return (
    <MyPosts
      updateNewPostText={onPostChange}
      addPost={addPost}
      posts={state.posts}
      newPostText={state.newPostText}
    />
  )
};

export default MyPostsContainer;