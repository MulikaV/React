import React from "react";
import LoginForm from "./LoginForm";
import {compose} from "redux";
import {login} from "../../Redux/auth-reducer";
import {connect} from 'react-redux';
import style from "./loginContainer.module.css";
import {Redirect} from "react-router-dom";


class LoginContainer extends React.Component {
  onLoginFormSubmit = (loginData) => {
    this.props.login(loginData.email, loginData.password, loginData.rememberMe);
  };

  render() {
    if (this.props.isAuth) {
      return <Redirect to={"/profile"}/>
    }

    return <div className={style.loginForm}>
      <div>
        <h1>LOGIN</h1>
      </div>
      <div>
        <LoginForm onSubmit={this.onLoginFormSubmit}/>
      </div>
    </div>
  }
}

const mapStateToProps = (state) => ({isAuth: state.auth.isAuth});


export default compose(connect(mapStateToProps, {login}))(LoginContainer);