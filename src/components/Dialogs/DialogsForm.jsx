import React from 'react';
import {Field, reduxForm} from "redux-form";

let DialogsForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field name="newMessageText" component="textarea"  />
      </div>
      <div>
        <button type="submit">Add message</button>
      </div>
    </form>
  )
};

DialogsForm = reduxForm({form: 'messageText'})(DialogsForm);

export default DialogsForm;