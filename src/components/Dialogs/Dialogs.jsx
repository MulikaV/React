import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {addNewMessageAC, updateNewMessageText} from "../../Redux/state";

const Dialogs = (props) => {

  const dialogs = props.dialogs
    .map(el => <DialogItem name={el.name} id={el.id}/>);

  const messages = props.messages
    .map(el => <Message message={el.message}/>);


  const addMessage = () => {
    props.dispatch(addNewMessageAC());
  };
  const updateNewMessage = (e) => {
    let text = e.target.value;
    props.dispatch(updateNewMessageText(text));
  };


  return (
    <div className={s.dialogs}>
      <div className={s.dialogs_items}>
        {dialogs}
      </div>
      <div className={s.messages}>
        {messages}
        <div>
          <textarea onChange={updateNewMessage} value={props.newMessageText}/>
        </div>
        <div>
          <button onClick={addMessage}>Add message</button>
        </div>
      </div>
    </div>
  )
};

export default Dialogs;