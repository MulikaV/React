import React from 'react';
import {addNewMessageAC, updateNewMessageText} from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
  const state = props.store.getState().messagePage;
  const addMessage = () => {
    props.store.dispatch(addNewMessageAC());
  };
  const updateNewMessage = (text) => {
    props.store.dispatch(updateNewMessageText(text));
  };


  return (
    <Dialogs
      updateNewMessageText = {updateNewMessage}
      addMessage = {addMessage}
      messages = {state.messages}
      dialogs = {state.dialogs}
      newMessageText = {state.newMessageText}
    />
  )
};

export default DialogsContainer;