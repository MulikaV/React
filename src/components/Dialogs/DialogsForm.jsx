import React from 'react';
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../FormControls/FormControls";
import {maxLength50, required} from "../../utils/validators/validators";

let DialogsForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field name="newMessageText" element={"input"} component={Textarea} validate={[required,maxLength50]} />
      </div>
      <div>
        <button type="submit">Add message</button>
      </div>
    </form>
  )
};

DialogsForm = reduxForm({form: 'messageText'})(DialogsForm);

export default DialogsForm;