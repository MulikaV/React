import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginContainer from "./components/Login/loginContainer";
import {connect} from "react-redux";
import {initializeApp} from "./Redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";


class App extends React.Component {


  componentDidMount() {
    this.props.initializeApp();
  }

  render() {

    if (!this.props.initialized) {
      return <Preloader />
    }

    return (
      <div>
        <HeaderContainer/>
        <div className="container app-wrapper">
          <Navbar/>
          <div className='app-wrapper-content'>
            <Route path="/dialogs"
                   render={() => <DialogsContainer/>}/>
            <Route path="/profile/:userId?"
                   render={() => <ProfileContainer/>}/>
            <Route path="/users" component={UsersContainer}/>
            <Route path="/login" component={LoginContainer}/>
          </div>
          <div className="app-wrapper-aside">
          </div>
        </div>
      </div>
    )
  }
}


const mapStateToProps = (state) => ({
  initialized: state.app.initialized
});


export default connect(mapStateToProps,{initializeApp})(App);
