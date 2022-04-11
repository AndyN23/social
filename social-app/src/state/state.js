let renderEntireTree = () => {
    console.log('Aloha!')
}


let state = {
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
}

export const addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likes: 0,
        dislikes: 0
    }
    state.profilePage.postsData.push(newPost)
    state.profilePage.newPostText = ''
    renderEntireTree();
}

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    renderEntireTree();
}

export const addMessage = (textMessage) => {
    let newMessage = {
        id: 4,
        message: textMessage,
    }
    state.messagePage.messagesData.push(newMessage);
    renderEntireTree();
}

export const subscribe = (observer) =>{
    renderEntireTree = observer;
}

export default state;