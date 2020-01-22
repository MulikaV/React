import {authApi} from "../api/api";
import {stopSubmit} from "redux-form";

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

export const setUserAuthData = (userId, login, email, isAuth) => ({
  type: SET_USER_AUTH_DATA,
  payload: {userId, login, email, isAuth}
});


export const setAuthData = () => async (dispatch) => {
    const data = await authApi.getAuth();

    if (data.resultCode === 0) {
      let {id, login, email} = data.data;
      dispatch(setUserAuthData(id, login, email, true));
    }
  }
;

export const login = (email, password, rememberMe) => async (dispatch) => {
  const data = await authApi.login(email, password, rememberMe);
  if (data.resultCode === 0) {
    dispatch(setAuthData());
  } else {
    let message = data.messages.length > 0 ? data.messages[0] : "Some Error";
    dispatch(stopSubmit("login", {_error: message}));
  }
};

export const logout = () => async (dispatch) => {
  const data = await authApi.logout();

  if (data.resultCode === 0) {
    dispatch(setUserAuthData(null, null, null, false));
  }
};


export default authReducer;