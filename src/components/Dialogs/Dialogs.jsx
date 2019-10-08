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
  return (
    <div className={s.dialogs}>
      <div className={s.dialogs_items}>
        <DialogItem name='Dmitriy' id='1'/>
        <DialogItem name='Valera' id="2"/>
        <DialogItem name='Olga' id='3'/>
        <DialogItem name='Vova' id='4'/>
      </div>
      <div className={s.messages}>
        <Message message='Hello'/>
        <Message message="It's me"/>
        <Message message='Mother facker'/>
        <Message message='Yo Yo Yo'/>

      </div>
    </div>
  )
};

export default Dialogs;