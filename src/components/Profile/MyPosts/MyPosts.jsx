import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {

  const newPostElement = React.createRef();
  const addPost = () => {
    props.dispatch({type:'ADD-POST'});
  };

  const onPostChange = () => {
    let text = newPostElement.current.value;
    props.dispatch({type:'UPDATE-NEW-POST-TEXT',postText: text});
  };

  const postsElements = props.posts
    .map(el => <Post text={el.message} likesCount={el.likesCount}/>);

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText} />
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