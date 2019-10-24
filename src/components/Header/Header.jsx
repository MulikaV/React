import React from 'react';
import s from './Header.module.css';

const Header = () => {
  return (
    <header className={s.header}>
      <div className="container">
        <span className={s.logo}>uPublic</span>
      </div>

    </header>
  )
};

export default Header;