import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const     Dialogs = (props) => {

  const dialogs = props.state.dialogs
    .map(el => <DialogItem name={el.name} id={el.id}/>);
  const messages = props.state.messages
    .map(el => <Message message={el.message}/>);

  return (
    <div className={s.dialogs}>
      <div className={s.dialogs_items}>
        {dialogs}
      </div>
      <div className={s.messages}>
        {messages}
      </div>
    </div>
  )
};

export default Dialogs;