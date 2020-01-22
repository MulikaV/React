const ADD_MESSAGE = 'ADD-MESSAGE';

const initialState = {
  messages: [
    {id: 1, message: 'Hello'},
    {id: 2, message: 'It\'s me'},
    {id: 3 ,message: 'Mother facker'},
    {id: 4, message: 'Yo Yo Yo'}
  ],
  dialogs: [
    {id: 1, name: 'Dmitriy'},
    {id: 2, name: 'Valera'},
    {id: 3, name: 'Olga'},
    {id: 4, name: 'Vova'}
  ]
};

const dialogsReducer = (state = initialState, action) => {

  switch (action.type) {

    case ADD_MESSAGE:
      debugger;
      return {
        ...state,
        messages: [...state.messages, {id: 5, message: action.message}]
      };

    default:
      return state;
  }
};

export const addNewMessage = (message) => ({type: ADD_MESSAGE, message});

export default dialogsReducer;