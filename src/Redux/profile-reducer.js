import {profileApi} from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';

const initialState = {
  posts: [
    {id: 1, message: 'My first post', likesCount: 12},
    {id: 2, message: 'Wow It\'s working', likesCount: 3},
    {id: 3, message: 'Bla bla bla', likesCount: 7}
  ],
  newPostText: '',
  profile: null,
  status: ''
};

const profileReducer = (state = initialState, action) => {

  switch (action.type) {

    case ADD_POST:
      const postText = state.newPostText;
      return {
        ...state,
        newMessageText: '',
        posts: [...state.posts, {d: 5, message: postText, likesCount: 0}]
      };

    case UPDATE_NEW_POST_TEXT:
      return {
        ...state, newPostText: action.postText
      };

    case SET_USER_PROFILE:
      return {
        ...state, profile: action.profile
      };

    case SET_USER_STATUS:
      return {
        ...state,
        status: action.status
      };

    default:
      return state;
  }
};

export const addNewPostAC = () => ({type: ADD_POST});
export const setUserStatus = (status) => ({type: SET_USER_STATUS, status});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const updateNewPostTextAC = (text) =>
  ({type: UPDATE_NEW_POST_TEXT, postText: text});


export const getUserProfile = (userId) => {

  return (dispatch) => {
    profileApi.getProfile(userId)
      .then(data => {
        debugger;
        dispatch(setUserProfile(data));
      });
  }
};


export const getUserStatus = (userId) => {

  return (dispatch) => {
    profileApi.getProfileStatus(userId)
      .then(data => {
        debugger;
        dispatch(setUserStatus(data));
      });
  }
};

export const updateStatus = (status) => {

  return (dispatch) => {
      profileApi.updateStatus(status)
      .then(data => {
        if (data.resultCode === 0) {
          dispatch(setUserStatus(status));
        }
      });
  }
};

export default profileReducer;