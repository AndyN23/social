const ADD_POST = "ADD-POST";
const UPDATE_POST = "UPDATE-POST";

let initialState = {
    postsData : [
        { id: 1, message: "It's my village",  likes: "38", dislikes: "2" },
        { id: 2, message: "My home", likes: "28", dislikes: "9" },
        { id: 3, message: "It's my village - home", likes: "48", dislikes: "12" }
    ],
    newPostText: ''
}

const profileReducer = (state = initialState, action) => {
    switch (action.type){
        case ADD_POST :
            let newPost = {
                id: 5,
                message: state.newPostText,
                likes: 0,
                dislikes: 0
            }
            state.postsData.push(newPost)
            state.newPostText = ''
            return state;
        case UPDATE_POST :
            state.newPostText = action.newText;
            return state;
        default: 
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updatePostActionCreator = (text) => ({type: UPDATE_POST, newText: text})

export default profileReducer