import React from 'react';
import s from './Header.module.css';
import {NavLink} from 'react-router-dom'
import {Container} from "reactstrap";

const Header = (props) => {
  return (
    <header className={s.header}>
      <Container className={s.header_container}>
        <span className={s.logo}>uPublic</span>
        <div className={s.loginBlock}>
          { props.isAuth
            ? <span className={s.user_login}>{props.login}</span>

            : <NavLink to={'/login'}>Login</NavLink>
          }



        </div>
      </Container>


    </header>
  )
};

export default Header;