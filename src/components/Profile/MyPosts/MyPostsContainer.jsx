import React from 'react';
import {addNewPostAC, updateNewPostTextAC} from "../../../Redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux"

/*const MyPostsContainer = () => {
  return (
    <StoreContext.Consumer>
      {store => {
        const state = store.getState().profilePage;
        const addPost = () => {
          store.dispatch(addNewPostAC());
        };
        const onPostChange = (text) => {
          store.dispatch(updateNewPostTextAC(text));
        };

        return <MyPosts
          updateNewPostText={onPostChange}
          addPost={addPost}
          posts={state.posts}
          newPostText={state.newPostText}
        />
      }
      }

    </StoreContext.Consumer>
  )
};*/

const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateNewPostText: (text) => {
      dispatch(updateNewPostTextAC(text));
    },
    addPost: () => {
      dispatch(addNewPostAC());
    }
  }
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;