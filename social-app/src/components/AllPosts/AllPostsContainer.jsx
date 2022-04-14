import React from 'react';
import { addPostActionCreator, updatePostActionCreator } from '../../redux/profileReducer';
import AllPosts from './AllPosts';


const AllPosts = (props) => {
    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    let onPostChange=(text) => {
        let action = updatePostActionCreator(text);
        props.dispatch(action);
    }

    return (
        <AllPosts updateNewPostText={onPostChange} addPost={addPost}/>
    );
};

export default AllPosts;