import {authApi} from "../api/api";

const SET_USER_AUTH_DATA = 'SET_USER_AUTH_DATA';

const initialState = {
  userId: null,
  login: null,
  email: null,
  isAuth: false
};

const authReducer = (state = initialState, action) => {

  switch (action.type) {

    case SET_USER_AUTH_DATA:
      return {
        ...state,
        ...action.data,
        isAuth: true
      };


    default:
      return state;
  }
};

export const setAuthData = () => {
  return (dispatch) => {
    authApi.getAuth()
      .then(data => {
        if (data.resultCode === 0){
          let {id, login,email} = data.data;
          dispatch(setUserAuthData(id,login,email));
        }
      })
  }
};


export const setUserAuthData = (userId,login,email) => ({type: SET_USER_AUTH_DATA, data:{userId,login,email}});

export default authReducer;