const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

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

  /*addPost() {
    let newPost = {
      id: 5,
      message: this._state.profilePage.newPostText,
      likesCount: 0
    };
    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = '';

    this._callSubscriber(this._state);
  },
  updateNewPostText(postText) {
    this._state.profilePage.newPostText = postText;
    this._callSubscriber(this._state);
  }*/
  dispatch(action) {
    switch (action.type) {
      case ADD_POST:
        let newPost = {
          id: 5,
          message: this._state.profilePage.newPostText,
          likesCount: 0
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';

        this._callSubscriber(this._state);
        break;

      case UPDATE_NEW_POST_TEXT:
        this._state.profilePage.newPostText = action.postText;
        this._callSubscriber(this._state);
        break;

      case ADD_MESSAGE:
        let newMessage = {
          id: 5,
          message: this._state.messagePage.newMessageText
        };

        this._state.messagePage.messages.push(newMessage);
        this._state.messagePage.newMessageText = '';

        this._callSubscriber(this._state);
        break;

      case UPDATE_NEW_MESSAGE_TEXT :
        this._state.messagePage.newMessageText = action.messageText;
        this._callSubscriber(this._state);
        break;
    }
  }
};

export const addNewMessageAC = () => ({type:ADD_MESSAGE});

export const updateNewMessageText = (text) =>
  ({type:UPDATE_NEW_MESSAGE_TEXT, messageText: text});

export const addNewPostAC = () => ({type: ADD_POST});

export const updateNewPostTextAC = (text) =>
  ({type: UPDATE_NEW_POST_TEXT, postText: text});


export default store;