import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {addNewPostAC, updateNewPostTextAC} from "../../../Redux/state";

const MyPosts = (props) => {

  const addPost = () => {
    props.dispatch(addNewPostAC());
  };

  const onPostChange = (e) => {
    let text =e.target.value;
    props.dispatch(updateNewPostTextAC(text));
  };

  const postsElements = props.posts
    .map(el => <Post text={el.message} likesCount={el.likesCount}/>);

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea onChange={onPostChange} value={props.newPostText}/>
        </div>
        <div>
          <button onClick={addPost}>Add post</button>
        </div>
      </div>
      <div className={s.posts}>
        {postsElements}
      </div>
    </div>
  )
};

export default MyPosts;