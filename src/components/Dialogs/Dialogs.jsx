import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Redirect} from "react-router-dom";
import DialogsForm from "./DialogsForm";

const Dialogs = ({messagePage,addNewMessage}) => {
  const dialogs = messagePage.dialogs
    .map(el => <DialogItem key={el.id} name={el.name} id={el.id}/>);
  const messages = messagePage.messages
    .map(el => <Message key={el.id} message={el.message}/>);

  const onDialogsFormAdd = (message) => {
    addNewMessage(message.newMessageText);
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