import React from 'react';
import s from './AllPosts.module.css'
import UiButton from '../UI/UiButton/UiButton';
import Post from './Post/Post'

const AllPosts = (props) => {

    let newpostElement = React.createRef();

    let addPost = () => {
        props.addPost();
    }

    let onPostChange=() => {
        let text = newpostElement.current.value;
        props.updateNewPostText(text);
    }


    let postItem = props.state.postsData.map(post => <Post message={post.message} likes={post.likes} dislikes={post.dislikes}></Post>)

    return (
        <div className={s.content}>
            <h3 className={s.title}> All Posts </h3>
            <div className={s.addPost}>
                <textarea 
                    onChange={onPostChange}
                    className={s.text}
                    ref={newpostElement}
                    value={props.state.newPostText}/>
                <UiButton onClick={addPost}>Add post</UiButton>
            </div>
            {postItem}
        </div>
    );
};

export default AllPosts;