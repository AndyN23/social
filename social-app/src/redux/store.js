import profileReducer from './profileReducer';
import messageReducer from './messageReducer';

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
            newPostText: ''
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
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagePage = messageReducer(this._state.messagePage, action);
        this._callSubscriber(this._state);
    },
}

export default store;
window.store = store;