import React from 'react';
import {Field, reduxForm} from "redux-form";
import {maxLength50,required} from "../../../utils/validators/validators";
import {Textarea} from "../../../FormControls/FormControls";

let MyPostsForm = (props) => {

  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component={Textarea} element={"textarea"} name="newPostText" validate={[required,maxLength50]}  />
      </div>
      <div>
        <button type="submit">Add post</button>
      </div>
    </form>
  )
};

MyPostsForm = reduxForm({form: 'postsForm'})(MyPostsForm);

export default MyPostsForm;