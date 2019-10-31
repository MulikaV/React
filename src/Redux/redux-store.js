import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import usersReducer from "./users-reduser";
import authReducer from "./auth-reducer";

const reducers = combineReducers({
  profilePage:profileReducer,
  messagePage:dialogsReducer,
  usersPage:usersReducer,
  auth:authReducer
});

const store = createStore(reducers);

window.store = store;

export default store;