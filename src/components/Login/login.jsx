import React from "react";
import {Field, reduxForm} from 'redux-form'

const Login = (props) => {
  return <div>
    <h1>LOGIN</h1>
    <LoginForm/>
  </div>

};

let LoginForm = (props) => {
  return <form>
    <div>
      <label htmlFor="login">Login</label>
      <Field name="login" placeholder="Enter your login" component="input"/>
    </div>
    <div>
      <label htmlFor="password">Password</label>
      <Field name="password" type="password" placeholder="Enter your password" component="input"/></div>
    <div>
      <Field type="checkbox" component="input" name ="rememberMe"/> Remember me
    </div>
    <div>
      <button type="submit">Login</button>
    </div>
  </form>
};

LoginForm = reduxForm({
  form: 'login'
})(LoginForm)

export default Login;