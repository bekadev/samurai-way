import React from "react";
import s from './Post.module.css';

type PostPropsType = {
    message: string
}

export const Post = (props: PostPropsType) => {
    return (
        <div className={s.item}>
            <div>
                <img className={s.img} src="https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg" alt=""/>
            </div>
            <p className={s.text}>{props.message}</p>
        </div>
    )
}
