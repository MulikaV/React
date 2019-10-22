import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {

  const onPostChange = (e) => {
    let text = e.target.value;
    props.updateNewPostText(text);
  };

  const addPost = () => {
    props.addPost();
  };

  const postsElements = props.posts
    .map(el => <Post text={el.message} key={el.id} likesCount={el.likesCount}/>);

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