import React from 'react';
import s from './Header.module.css';

const Header = () => {
    return (
        <header className={s.header}>
            <img src="data:image/png;base64,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" alt=""/>
        </header>
    )
};

export default Header;