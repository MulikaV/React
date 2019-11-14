import React from "react";
import LoginForm from "./LoginForm";
import {compose} from "redux";
import {login} from "../../Redux/auth-reducer";
import {connect} from 'react-redux';


class LoginContainer extends React.Component {


  onLoginFormSubmit = (loginData) => {
    this.props.login(loginData.email,loginData.password,loginData.rememberMe);
  };

  render() {
    return <div>
      <h1>LOGIN</h1>
      <LoginForm onSubmit={this.onLoginFormSubmit}/>
    </div>
  }
}

const mapStateToProps=(state)=>({isAuth:state.auth.isAuth});


export default compose(connect(mapStateToProps,{login}))(LoginContainer);