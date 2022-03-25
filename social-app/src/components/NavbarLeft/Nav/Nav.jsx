import React from 'react';
import { NavLink } from 'react-router-dom';
import s from '../Nav/Nav.module.css'

const Nav = () => {
    return (
        <nav className={s.nav}>
            <div>
                <NavLink 
                    to="/"  
                    className={navData => navData.isActive? s.activeLink : s.navItem}>
                        Home 
                </NavLink>
            </div>
            <div>
                <NavLink 
                    to="/dialogs"  
                    className={navData => navData.isActive? s.activeLink : s.navItem}>
                        Messages
                </NavLink>
            </div>
            <div>
                <NavLink 
                    to="/photos" 
                    className={navData => navData.isActive? s.activeLink : s.navItem}>
                        Photos
                </NavLink>
            </div>
            <div>
                <NavLink 
                    to="/news" 
                    className={navData => navData.isActive? s.activeLink : s.navItem}>
                        News feed
                </NavLink>
            </div>
            <div>
                <NavLink 
                    to="/profile" 
                    className={navData => navData.isActive? s.activeLink : s.navItem}>
                        Profile
                </NavLink>
            </div>
            <div>
                <NavLink 
                    to="/settings" 
                    className={navData => navData.isActive? s.activeLink : s.navItem}>
                        Settings
                </NavLink>
            </div>
        </nav>
    );
};

export default Nav;