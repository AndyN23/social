import React from 'react';
import s from "../Post/Post.module.css"
import UiButton from '../../UI/UiButton/UiButton';

const Post = (props) => {
    return (
        <div className={s.post}>
            <div className={s.postTop}>
                <img src="https://crops.giga.de/2e/9f/3a/941169298b9a4f54d588c2e04e_YyAxMTIweDYzMCszNisyMAJyZSA0ODAgMjcwAzJmOTEyYjQ0ODI0.jpg" alt="" />
                <button> . . . </button>
            </div>
            <div className={s.postContent}>
                <img src="https://a.cdn-hotels.com/gdcs/production122/d1611/bba027a5-f1eb-4c95-820d-cc63c89fa143.jpg" alt="" />
            </div>
            <div className={s.postBottom}>
                <h4>{props.message}</h4>
                <div className={s.postLikeBlock}>
                    <span>{props.likes}</span>
                    <span>{props.dislikes}</span>
                </div>
                <UiButton>Comments</UiButton>
            </div>
        </div>
    );
};

export default Post;