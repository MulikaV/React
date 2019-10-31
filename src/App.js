import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {Route} from "react-router-dom";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";


function App(props) {

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
          <Route path="/music" component={Music}/>
          <Route path="/settings" component={Settings}/>
        </div>
        <div className="app-wrapper-aside">

        </div>
      </div>

    </div>

  )
};

export default App;
