const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

const initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {

    case ADD_MESSAGE:
      let newMessage = {
        id: 5,
        message: state.newMessageText
      };
      state.messages.push(newMessage);
      state.newMessageText = '';
      return state;

    case UPDATE_NEW_MESSAGE_TEXT :
      state.newMessageText = action.messageText;
      return state;

    default:
      return state;
  }
};

export const addNewMessageAC = () => ({type: ADD_MESSAGE});

export const updateNewMessageText = (text) =>
  ({type: UPDATE_NEW_MESSAGE_TEXT, messageText: text});

export default dialogsReducer;