const SET_USER_AUTH_DATA = 'SET_USER_AUTH_DATA';

const initialState = {
  userId: null,
  login: null,
  email: null,
  isAuth: true
};

const authReducer = (state = initialState, action) => {

  switch (action.type) {

    case SET_USER_AUTH_DATA:
      return {
        ...state,
        ...action.data
      };


    default:
      return state;
  }
};

export const setUserAuthData = (userId,login,email) => ({type: SET_USER_AUTH_DATA, data:{userId,login,email}});

export default authReducer;