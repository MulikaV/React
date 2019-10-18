import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

const redusers = combineReducers({
  profilePage:profileReducer,
  messagePage:dialogsReducer
});

const store = createStore(redusers);

export default store;