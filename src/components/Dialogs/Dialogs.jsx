import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Redirect} from "react-router-dom";
import DialogsForm from "./DialogsForm";

const Dialogs = (props) => {
  const dialogs = props.messagePage.dialogs
    .map(el => <DialogItem name={el.name} id={el.id}/>);

  const messages = props.messagePage.messages
    .map(el => <Message message={el.message}/>);

  const onDialogsFormAdd = (message) => {
    console.log(message);
    props.addNewMessage(message.newMessageText);
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogs_items}>
        {dialogs}
      </div>
      <div className={s.messages}>
        {messages}
        <DialogsForm onSubmit={onDialogsFormAdd}/>
      </div>
    </div>
  )
};



export default Dialogs;