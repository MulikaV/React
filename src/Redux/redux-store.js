import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import usersReducer from "./users-reduser";
import authReducer from "./auth-reducer";
import thunk from "redux-thunk";
import { reducer as formReducer } from 'redux-form'

const reducers = combineReducers({
  profilePage:profileReducer,
  messagePage:dialogsReducer,
  usersPage:usersReducer,
  auth:authReducer,
  form: formReducer
});

const store = createStore(reducers,applyMiddleware(thunk));

window.store = store;

export default store;