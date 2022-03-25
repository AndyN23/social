import React from 'react';
import s from '../NavbarLeft/NavbarLeft.module.css'
import Nav from './Nav/Nav';

const NavbarLeft = () => {
    return (
        <div className={s.navLeft}>
            <Nav/>
        </div>
    );
};

export default NavbarLeft;