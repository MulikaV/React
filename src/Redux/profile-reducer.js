import {profileApi} from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';

const initialState = {
  posts: [
    {id: 1, message: 'My first post', likesCount: 12},
    {id: 2, message: 'Wow It\'s working', likesCount: 3},
    {id: 3, message: 'Bla bla bla', likesCount: 7}
  ],
  profile: null,
  status: ''
};

const profileReducer = (state = initialState, action) => {

  switch (action.type) {

    case ADD_POST:
      return {
        ...state,
        posts: [...state.posts, {d: 5, message: action.postText, likesCount: 0}]
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

export const addNewPost = (postText) => ({type: ADD_POST, postText});
export const setUserStatus = (status) => ({type: SET_USER_STATUS, status});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});


export const getUserProfile = (userId) => {

  return async (dispatch) => {
    let data = await profileApi.getProfile(userId);
    dispatch(setUserProfile(data));
  }
};


export const getUserStatus = (userId) => {

  return async (dispatch) => {
    let data = await profileApi.getProfileStatus(userId);
    dispatch(setUserStatus(data));
  }
};

export const updateStatus = (status) => {

  return async (dispatch) => {
    let data = await profileApi.updateStatus(status);
    if (data.resultCode === 0) {
      dispatch(setUserStatus(status));
    }
  }
};

export default profileReducer;