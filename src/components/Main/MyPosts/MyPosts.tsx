import React from "react";
import s from './MyPosts.module.css';
import {Post} from "./Post/Post";

type PostDataType = {
    id: number,
    message: string

}

export type addPostPropsType = {
    addPost: (postText: string) => void
}


export type PostDareType = {
    postData: PostDataType[]
}


export const MyPosts = (props: PostDareType & addPostPropsType) => {

    let postElements = props.postData.map(p => <Post message={p.message}/>)

    let newPostElement = React.createRef<HTMLInputElement>()

    const onClickHandler = () => {
        if (newPostElement.current) {
            props.addPost(newPostElement.current.value)
        }
    }

    return (
        <div>
            <p>
                My posts
            </p>
            <input ref={newPostElement}  className={s.input} type="text"/>
            <br/>
            <button onClick={onClickHandler}>Send</button>
            <div className={s.posts}>
                {postElements}
            </div>
        </div>
    )
}
