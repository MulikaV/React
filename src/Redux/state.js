const state = {
  profilePage: {
    posts: [
      {id: 1, message: 'My first post', likesCount: 12},
      {id: 2, message: 'Wow It\'s working', likesCount: 3},
      {id: 3, message: 'Bla bla bla', likesCount: 7}
    ]
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
    ]
  }
};

export default state;