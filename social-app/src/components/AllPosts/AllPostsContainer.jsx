import React from 'react';
import { addPostActionCreator, updatePostActionCreator } from '../../redux/profileReducer';
import AllPosts from './AllPosts';


const AllPostsContainer = (props) => {
    let state = props.store.getState();

    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
    }

    let onPostChange=(text) => {
        let action = updatePostActionCreator(text);
        props.store.dispatch(action);
    }
    return (
        <AllPosts 
            updateNewPostText={onPostChange} 
            addPost={addPost} 
            postsData ={state.profilePage.postsData}
            newPostText = {state.profilePage.newPostText}/>
    );
};

export default AllPostsContainer;