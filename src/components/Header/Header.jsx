import React from 'react';
import styles from './Header.module.css';
import {NavLink} from 'react-router-dom'
import {Container} from "reactstrap";
import userAvatar from './../../assets/images/userimage.png'

const Header = (props) => {
  return (
    <header className={styles.header}>
      <Container className={styles.header_container}>
        <span className={styles.logo}>uPublic</span>
        <div className={styles.loginBlock}>
          { props.isAuth
            ? <div className={"dropdown"}>
              <a role="button" id="dropdownMenu1"
                 data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <img className={styles.userAvatar} src={userAvatar}/>
                </a>{props.login}
              <div className="dropdown-menu " aria-labelledby="dropdownMenu1">
                <a className={"dropdown-item" + " " + styles.logout} onClick={props.logout}>Log Out</a>
              </div>

            </div>

            : <NavLink to={'/login'}>Login</NavLink>
          }



        </div>
      </Container>


    </header>
  )
};

export default Header;