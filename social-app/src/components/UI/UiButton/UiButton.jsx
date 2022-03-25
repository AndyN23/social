import React from 'react';
import s from '../UiButton/UiButton.module.css'

const UiButton = ({children, ...props}) => {
    return (
        <button {...props} className={s.button}>
            {children}
        </button>
    );
};

export default UiButton;