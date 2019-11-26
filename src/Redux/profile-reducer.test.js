import React from 'react';
import {addNewPost} from "./profile-reducer";
import profileReducer from "./profile-reducer";


const state = {
  posts: [
    {id: 1, message: 'My first post', likesCount: 12},
    {id: 2, message: 'Wow It\'s working', likesCount: 3},
    {id: 3, message: 'Bla bla bla', likesCount: 7}
  ]
};

it('length of posts should be incremented', () => {

  const action = addNewPost("Yo yo yo");

  const newState = profileReducer(state,action);

  expect(newState.posts.length).toBe(4);

});

it('message of new post should be correct', () => {

  const action = addNewPost("Yo yo yo");

  const newState = profileReducer(state,action);

  expect(newState.posts[3].message).toBe("Yo yo yo");

});
