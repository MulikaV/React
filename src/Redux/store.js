import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

const store = {
  _state: {
    profilePage: {
      posts: [
        {id: 1, message: 'My first post', likesCount: 12},
        {id: 2, message: 'Wow It\'s working', likesCount: 3},
        {id: 3, message: 'Bla bla bla', likesCount: 7}
      ],
      newPostText: ''
    },
    messagePage: {
      messages: [
        {id: 1, message: 'Hello'},
        {id: 1, message: 'It\'s me'},
        {id: 1, message: 'Mother facker'},
        {id: 1, message: 'Yo Yo Yo'}
      ],
      dialogs: [
        {id: 1, name: 'Dmitriy'},
        {id: 2, name: 'Valera'},
        {id: 3, name: 'Olga'},
        {id: 4, name: 'Vova'}
      ],
      newMessageText: ''
    }
  },
  _callSubscriber() {
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this.getState.profilePage = profileReducer(this._state.profilePage, action);
    this.getState.messagePage = dialogsReducer(this._state.messagePage, action);
    this._callSubscriber(this._state);
  }

};


export default store;