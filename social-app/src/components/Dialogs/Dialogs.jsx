import React from 'react';
import s from './Dialogs.module.css';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';
import UiButton from '../UI/UiButton/UiButton';
import { updateMessageCreator, sendMessageCreator } from '../../redux/messageReducer';

const Dialogs = (props) => {

    // let newMessage = React.createRef();

    let addMessage = () => {
        props.dispatch(sendMessageCreator());
    }

    let onMessageChange = (e) => {
        let text = e.target.value;
        props.dispatch(updateMessageCreator(text));
    }

    let userItem = props.state.usersData.map( dialog => <Dialog name={dialog.name} id={dialog.id}/>);

    let messageItem = props.state.messagesData.map( message => <Message text={message.text}/>);

    return (
        <div className={s.dialogs}>
            <div className={s.users}>
                {userItem}
            </div>
            <div className={s.messages}>
                {messageItem}
                <textarea 
                    onChange={onMessageChange}
                    // ref={newMessage}
                    value={props.state.newMessageText}
                    placeholder="Enter you message..."/>
                <UiButton onClick={addMessage}>Submit</UiButton>
            </div>
        </div>
    );
};

export default Dialogs;