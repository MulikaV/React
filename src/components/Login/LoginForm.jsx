import React from "react";
import {Field, reduxForm} from 'redux-form'


let LoginForm = (props) => {
  return <form onSubmit={props.handleSubmit}>
    <div>
      <label htmlFor="email">Email</label>
      <Field name="email" placeholder="Enter your email" component="input" type="email"/>
    </div>
    <div>
      <label htmlFor="password">Password</label>
      <Field name="password" type="password" placeholder="Enter your password" component="input"/></div>
    <div>
      <Field type="checkbox" component="input" name="rememberMe"/> Remember me
    </div>
    <div>
      <button type="submit">Login</button>
    </div>
  </form>
};

LoginForm = reduxForm({form: 'login'})(LoginForm);

export default LoginForm;