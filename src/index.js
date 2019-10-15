import React from 'react';
import * as serviceWorker from './serviceWorker';
import ReactDOM from 'react-dom';
import App from './App';
import state from "./Redux/state";
import {addPost, subscribe, updateNewPostText} from "./Redux/state";

const rerenderEntireTree = (state) => {
  ReactDOM.render(<App state={state} addPost={addPost}
                       updateNewPostText={updateNewPostText}/>,
    document.getElementById('root'));
};

rerenderEntireTree(state);

subscribe(rerenderEntireTree);

serviceWorker.unregister();
