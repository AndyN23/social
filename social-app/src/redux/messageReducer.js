const UPDATE_TEXT_MESSAGE= "UPDATE-MESSAGE";
const SEND_MESSAGE = "SEND-MESSAGE";

let initialState = {
    usersData : [
        { id: 1, name: "Ivan" },
        { id: 2, name: "Sergey"},
        { id: 3, name: "Roman"},
        { id: 4, name: "Vasya"},
        { id: 5, name: "Lexa"}
    ],
    messagesData : [
        { id:1, text: "Aloha!"},
        { id:2, text: "Hey bro!"},
        { id:3, text: "Give me my money!"},
        { id:4, text: "What happend?!"},
        { id:5, text: "Call me!"},
    ],
    newMessageText: '',
}

const messageReducer = (state = initialState, action) => {
    switch(action.type) {
        case UPDATE_TEXT_MESSAGE: 
            state.newMessageText = action.body;
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageText;
            state.newMessageText = '';
            state.messagesData.push({id: 6, text:body})
            return state;
        default: 
            return state;
    } 
}

export const updateMessageCreator = (body) => ({type: UPDATE_TEXT_MESSAGE, body: body})
export const sendMessageCreator = () => ({type: SEND_MESSAGE })

export default messageReducer;