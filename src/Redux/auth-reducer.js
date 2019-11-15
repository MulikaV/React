import {authApi} from "../api/api";

const SET_USER_AUTH_DATA = 'SET_USER_AUTH_DATA';
const SET_USER_LOGIN = 'SET_USER_LOGIN';

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
        ...action.payload
      };

    default:
      return state;
  }
};

export const setUserAuthData = (userId,login,email,isAuth) => ({
  type: SET_USER_AUTH_DATA,
  payload:{userId,login,email,isAuth}});


export const setAuthData = () => {
  return (dispatch) => {
    authApi.getAuth()
      .then(data => {
        debugger;
        if (data.resultCode === 0){
          let {id, login,email} = data.data;
          dispatch(setUserAuthData(id,login,email,true));
        }
      })
  }
};

export const login =(email,password,rememberMe) => {
  return (dispatch)=>{
    authApi.login(email,password,rememberMe)
      .then(data => {
        debugger;
        if(data.resultCode === 0){
          dispatch(setAuthData());
        }
      })
  }
};

export const logout =() => {
  return (dispatch)=>{
    authApi.logout()
      .then(data => {
        debugger;
        if(data.resultCode === 0){
          dispatch(setUserAuthData(null,null,null,false));
        }
      })
  }
};




export default authReducer;