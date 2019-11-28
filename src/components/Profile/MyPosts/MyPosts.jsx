import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import MyPostsForm from "./MyPostsForm";
import {compose} from "redux";
import {connect} from "react-redux";
import {addNewPost} from "../../../Redux/profile-reducer";

const MyPosts = React.memo(({posts,addNewPost}) => {

  const addPost = (value) => {
    addNewPost(value.newPostText);
  };

  const postsElements = posts
    .map(el => <Post text={el.message} key={el.id} likesCount={el.likesCount}/>);

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <MyPostsForm onSubmit={addPost}/>
      <div className={s.posts}>
        {postsElements}
      </div>
    </div>
  )
});

const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
  }
};

export default compose(connect(mapStateToProps, {addNewPost}))(MyPosts)