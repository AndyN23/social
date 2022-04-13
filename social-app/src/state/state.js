const ADD_POST = "ADD-POST";
const UPDATE_POST = "UPDATE-POST";
const UPDATE_TEXT_MESSAGE= "UPDATE-MESSAGE";
const SEND_MESSAGE = "SEND-MESSAGE";

let store = {
    _state : {
        messagePage: {
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
        },
        profilePage: {
            postsData : [
                { id: 1, message: "It's my village",  likes: "38", dislikes: "2" },
                { id: 2, message: "My home", likes: "28", dislikes: "9" },
                { id: 3, message: "It's my village - home", likes: "48", dislikes: "12" }
            ],
            newPostText: 'new text'
        }
    },
    _callSubscriber () {
        console.log('Aloha!')
    },

    getState() {
        return this._state 
    },
    subscribe (observer) {
        this._callSubscriber = observer;
    },

    dispatch(action){ //action {type: 'ADD-POST' , data}
        if
            (action.type === ADD_POST){
                let newPost = {
                    id: 5,
                    message: this._state.profilePage.newPostText,
                    likes: 0,
                    dislikes: 0
                }
                this._state.profilePage.postsData.push(newPost)
                this._state.profilePage.newPostText = ''
                this._callSubscriber(this._state);
        } else if 
            (action.type === UPDATE_POST){
                this._state.profilePage.newPostText = action.newText;
                this._callSubscriber(this._state);
        } else if 
            (action.type === UPDATE_TEXT_MESSAGE) {
                this._state.messagePage.newMessageText = action.body;
                this._callSubscriber(this._state);
        } else if 
            (action.type === SEND_MESSAGE) {
                let body = this._state.messagePage.newMessageText;
                this._state.messagePage.newMessageText = '';
                this._state.messagePage.messagesData.push({id: 6, text:body})
                this._callSubscriber(this._state);
        }
    },
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updatePostActionCreator = (text) => ({type: UPDATE_POST, newText: text})

export const updateMessageCreator = (body) => ({type: UPDATE_TEXT_MESSAGE, body: body})
export const sendMessageCreator = () => ({type: SEND_MESSAGE })

export default store;
window.store = store;