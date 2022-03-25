import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';


const Dialog = (props) => {
    let path = "/dialogs/" + props.id;
    return(
        <div className={dialogData => dialogData.isActive ? s.active : s.user}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}


const Message =(props) => {
    return(
        <div className={s.message}>{props.text}</div>
    )
}


const Dialogs = (props) => {

    let usersData = [
        {
            id: 1,
            name: "Ivan"
        },
        {
            id: 2,
            name: "Sergey"
        },
        {
            id: 3,
            name: "Roman"
        },
        {
            id: 4,
            name: "Vasya"
        },
        {
            id: 5,
            name: "Lexa"
        }
    ];

    let messagesData = [
        {
            id:1,
            text: "Aloha!"
        },
        {
            id:2,
            text: "Hey bro!"
        },
        {
            id:3,
            text: "Give me my money!"
        },
        {
            id:4,
            text: "What happend?!"
        },
        {
            id:5,
            text: "Call me!"
        },
    ];

    let userItem = usersData.map( dialog => <Dialog name={dialog.name} id={dialog.id}/>);

    let messageItem =  messagesData.map( message => <Message text={message.text}/>);

    return (
        <div className={s.dialogs}>
            <div className={s.users}>
                {userItem}
            </div>
            <div clasName={s.messages}>
                {messageItem}
            </div>
        </div>
    );
};

export default Dialogs;