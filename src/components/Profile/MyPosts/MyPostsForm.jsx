import React from 'react';
import {Field, reduxForm} from "redux-form";
import {maxLength50,required} from "../../../utils/validators/validators";
import {Textarea} from "../../FormControls/FormControls";

let MyPostsForm = ({handleSubmit}) => {

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field component={Textarea} element={"textarea"} name="newPostText" validate={[maxLength50,required]}  />
      </div>
      <div>
        <button type="submit">Add post</button>
      </div>
    </form>
  )
};

MyPostsForm = reduxForm({form: 'postsForm'})(MyPostsForm);

export default MyPostsForm;