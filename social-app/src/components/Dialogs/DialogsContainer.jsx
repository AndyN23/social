import React from 'react';
import { updateMessageCreator, sendMessageCreator } from '../../redux/messageReducer';
import Dialogs from './Dialogs';

const DialogsContainer = (props) => {
    let state = props.store.getState().messagePage;

    let addMessage = () => {
        props.store.dispatch(sendMessageCreator());
    }

    let onMessageChange = (body) => {
        props.store.dispatch(updateMessageCreator(body));
    }

    return (
        <Dialogs 
            updateMessageBody={onMessageChange} 
            sendMessage={addMessage}
            messagePage={state}/>
    );
};

export default DialogsContainer;