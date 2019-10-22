const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const initialState = {
  posts: [
    {id: 1, message: 'My first post', likesCount: 12},
    {id: 2, message: 'Wow It\'s working', likesCount: 3},
    {id: 3, message: 'Bla bla bla', likesCount: 7}
  ],
  newPostText: ''
};

const profileReducer = (state = initialState, action) => {

  switch (action.type) {

    case ADD_POST:
      const postText = state.newPostText;
      return {
        ...state,
        newMessageText: '',
        posts: [...state.posts, {d: 5, message: postText, likesCount: 0}]
      };

    case UPDATE_NEW_POST_TEXT:
      return {
        ...state, newPostText: action.postText
      };

    default:
      return state;
  }
};

export const addNewPostAC = () => ({type: ADD_POST});

export const updateNewPostTextAC = (text) =>
  ({type: UPDATE_NEW_POST_TEXT, postText: text});

export default profileReducer;