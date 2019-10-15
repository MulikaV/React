const state = {
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
    ]
  }
};

export const addPost = () => {
  let newPost = {
    id: 5,
    message: state.profilePage.newPostText,
    likesCount: 0
  };
  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = '';

  rerenderEntireTree(state);
};

export const updateNewPostText = (postText) => {
  state.profilePage.newPostText = postText;
  rerenderEntireTree(state);
};

let rerenderEntireTree = () => {
};

export const subscribe = (observer) => {
  rerenderEntireTree = observer;
}

export default state;