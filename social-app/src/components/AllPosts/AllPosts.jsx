import React from 'react';
import s from './AllPosts.module.css'
import UiButton from '../UI/UiButton/UiButton';
import Post from './Post/Post'

const AllPosts = (props) => {

    let newpostElement = React.createRef();

    let addPost = () => {
        let postText = newpostElement.current.value;
        props.addPost(postText);
    }


    let postItem = props.state.postsData.map(post => <Post message={post.message} likes={post.likes} dislikes={post.dislikes}></Post>)

    return (
        <div className={s.content}>
            <h3 className={s.title}> All Posts </h3>
            <div className={s.addPost}>
                <textarea 
                    className={s.text}
                    ref={newpostElement}>
                </textarea>
                <UiButton onClick={addPost}>Add post</UiButton>
            </div>
            {postItem}
        </div>
    );
};

export default AllPosts;