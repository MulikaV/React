import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import usersReducer from "./users-reduser";
import authReducer from "./auth-reducer";
import thunk from "redux-thunk";

const reducers = combineReducers({
  profilePage:profileReducer,
  messagePage:dialogsReducer,
  usersPage:usersReducer,
  auth:authReducer
});

const store = createStore(reducers,applyMiddleware(thunk));

window.store = store;

export default store;