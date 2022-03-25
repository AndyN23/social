import React from 'react';
import s from './Header.module.css'
import logotype from '../../assets/logotype.svg'
import UiButton from '../UI/UiButton/UiButton';

const Header = (props) => {
    return (
        <header className={s.header}>
            <div className={s.headerLeft}>
                <img src={logotype}/>
                <a>SpaceNetWork</a>
            </div>
            <div className={s.headerRight}>
                <UiButton>Create</UiButton>
            </div>
        </header>
    );
};

export default Header;