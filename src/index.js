import React from 'react';
import * as serviceWorker from './serviceWorker';
import ReactDOM from 'react-dom';
import App from './App';
import store from "./Redux/state";
import {BrowserRouter} from "react-router-dom";


const rerenderEntireTree = (state) => {
  ReactDOM.render(
    <BrowserRouter>
      <App state={state} dispatch={store.dispatch.bind(store)}/>
    </BrowserRouter>,
    document.getElementById('root'));
};

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);

serviceWorker.unregister();
