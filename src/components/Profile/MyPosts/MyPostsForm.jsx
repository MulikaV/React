import React from 'react';
import {Field, reduxForm} from "redux-form";
import {maxLength50,required} from "../../../utils/validators/validators";
import {renderField} from "../../../FormControls/FormControls";

let MyPostsForm = (props) => {

  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component={renderField} name="newPostText" validate={[required,maxLength50]} label="Post Text" type="textarea"/>
      </div>
      <div>
        <button >Add post</button>
      </div>
    </form>
  )
};

MyPostsForm = reduxForm({form: 'postsForm'})(MyPostsForm);

export default MyPostsForm;