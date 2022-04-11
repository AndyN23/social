import React from 'react';
import s from './Dialogs.module.css';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';
import UiButton from '../UI/UiButton/UiButton';

const Dialogs = (props) => {

    let newMessage = React.createRef();

    let addMessage = () => {
        let message = newMessage.current.value;
        props.addMessage(message);
    }

    let userItem = props.state.usersData.map( dialog => <Dialog name={dialog.name} id={dialog.id}/>);

    let messageItem = props.state.messagesData.map( message => <Message text={message.text}/>);

    return (
        <div className={s.dialogs}>
            <div className={s.users}>
                {userItem}
            </div>
            <div clasName={s.messages}>
                {messageItem}
                <textarea ref={newMessage}></textarea>
                <UiButton onClick={addMessage}>Submit</UiButton>
            </div>
        </div>
    );
};

export default Dialogs;