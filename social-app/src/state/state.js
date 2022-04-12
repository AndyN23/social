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
        if(action.type === "ADD-POST"){
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likes: 0,
                dislikes: 0
            }
            this._state.profilePage.postsData.push(newPost)
            this._state.profilePage.newPostText = ''
            this._callSubscriber(this._state);
        } else if (action.type === "UPDATE-POST"){
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === "TEXT-MESSAGE") {
            let newMessage = {
                id: 4,
                message: action.textMessage,
            }
            this._state.messagePage.messagesData.push(newMessage);
            this._callSubscriber(this._state);
        }
    },
}

export default store;
window.store = store;