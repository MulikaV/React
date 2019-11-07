import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/login";


function App() {

  return (

    <div>
      <HeaderContainer />
      <div className="container app-wrapper">
        <Navbar />
        <div className='app-wrapper-content'>
          <Route path="/dialogs"
                 render={() => <DialogsContainer/>}/>
          <Route path="/profile/:userId?"
                 render={() => <ProfileContainer/>}/>
          <Route path="/users" component={UsersContainer}/>
          <Route path="/login" component={Login}/>
        </div>
        <div className="app-wrapper-aside">

        </div>
      </div>

    </div>

  )
};

export default App;
