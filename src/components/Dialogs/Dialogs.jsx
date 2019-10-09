import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
  return (
    <div className={s.dialog}>
      <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
    </div>
  )
};

const Message = (props) => {
  return (
    <div className={s.message}>
      {props.message}
    </div>
  )
};

const Dialogs = (props) => {
  const dialogsData = [
    {id: 1, name: 'Dmitriy'},
    {id: 2, name: 'Valera'},
    {id: 3, name: 'Olga'},
    {id: 4, name: 'Vova'}
  ];

  const messageData = [
    {id: 1, message: 'Hello'},
    {id: 1, message: 'It\'s me'},
    {id: 1, message: 'Mother facker'},
    {id: 1, message: 'Yo Yo Yo'},
  ];

  const dialogs = dialogsData
    .map(el => <DialogItem name={el.name} id={el.id}/>);
  const messages = messageData
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