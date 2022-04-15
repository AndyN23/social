import React from 'react';
import s from './AllPosts.module.css'
import UiButton from '../UI/UiButton/UiButton';
import Post from './Post/Post'


const AllPosts = (props) => {

    let newpostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
    }
    
    let onPostChange=() => {
        let text = newpostElement.current.value;
        props.updateNewPostText(text);
    }

    let postItem = 
        props.postsData.map(post => <Post message={post.message} likes={post.likes} dislikes={post.dislikes}/>)

    return (
        <div className={s.content}>
            <h3 className={s.title}> All Posts </h3>
            <div className={s.addPost}>
                <textarea 
                    onChange={onPostChange}
                    className={s.text}
                    ref={newpostElement}
                    placeholder="Enter you post text"
                    value={props.newPostText}/>
                <UiButton onClick={onAddPost}>Add post</UiButton>
            </div>
            {postItem}
        </div>
    );
};

export default AllPosts;