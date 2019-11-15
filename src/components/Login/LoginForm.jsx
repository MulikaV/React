import React from "react";
import {Field, reduxForm} from 'redux-form'
import {Checkbox, Input} from "../../FormControls/FormControls";
import {maxLength20, required, minLength6, email} from "../../utils/validators/validators";


let LoginForm = (props) => {
  return <form onSubmit={props.handleSubmit}>
    <div>
      <Field name="email" label="Email"  component={Input} validate={[required,email]} />
    </div>
    <div>
      <Field name="password" type="password" label="Password" component={Input} validate={[required,minLength6,maxLength20]} /></div>
    <div>
      <Field  component={Checkbox}  name="rememberMe" label="Remember me" />
    </div>
    <div>
      <button type="submit" className="btn btn-primary">Login</button>
    </div>
  </form>
};

LoginForm = reduxForm({form: 'login'})(LoginForm);

export default LoginForm;