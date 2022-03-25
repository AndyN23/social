import React from 'react';
import s from './AllPosts.module.css'
import UiButton from '../UI/UiButton/UiButton';
import Post from './Post/Post'

const AllPosts = () => {

    let postsData = [
        {
            id: 1,
            message: "It's my village",
            likes: "38",
            dislikes: "2"
        },
        {
            id: 2,
            message: "My home",
            likes: "28",
            dislikes: "9"
        },
        {
            id: 3,
            message: "It's my village - home",
            likes: "48",
            dislikes: "12"
        }
    ]

    let postItem = postsData.map(post => <Post message={post.message} likes={post.likes} dislikes={post.dislikes}></Post>)

    return (
        <div className={s.content}>
            <h3 className={s.title}> All Posts </h3>
            <div className={s.addPost}>
                <textarea className={s.text}></textarea>
                <UiButton>Add post</UiButton>
            </div>
            {postItem}
        </div>
    );
};

export default AllPosts;