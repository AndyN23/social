import React from 'react';
import s from './Dialogs.module.css';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';
import UiButton from '../UI/UiButton/UiButton';

const Dialogs = (props) => {
    let state = props.messagePage;

    let addMessage = () => {
        props.sendMessage();
    }

    let onMessageChange = (e) => {
        let body = e.target.value;
        props.updateMessageBody(body)
    }

    let userItem = 
        state.usersData.map( dialog => <Dialog name={dialog.name} id={dialog.id}/>);
        
    let messageItem = 
        state.messagesData.map( message => <Message text={message.text}/>);

    return (
        <div className={s.dialogs}>
            <div className={s.users}>
                {userItem}
            </div>
            <div className={s.messages}>
                {messageItem}
                <textarea 
                    onChange={onMessageChange}
                    value={props.newMessageText}
                    placeholder="Enter you message..."/>
                <UiButton onClick={addMessage}>Submit</UiButton>
            </div>
        </div>
    );
};

export default Dialogs;