import React from "react";
import s from './MyPosts.module.css';
import {Post} from "./Post/Post";

type PostDataType = {
    id: number,
    message: string
}

export type PostDareType = {
    postData: PostDataType[]
}


export const MyPosts = (props: PostDareType) => {

    let postElements = props.postData.map(p => <Post message={p.message}/>)


    return (
        <div>
            <p>
                My posts
            </p>
            <input className={s.input} type="text"/>
            <br/>
            <button>Send</button>
            <div className={s.posts}>
                {postElements}
            </div>
        </div>
    )
}
