import React from "react";
import s from './MainInfo.module.css'
import {PostDareType} from "../MyPosts/MyPosts";

export type MainInfoPropsType = {
    name: string
    date: string
    city: string
    education: string
    website: string
}

export const MainInfo = (props: MainInfoPropsType) => {
    return (
        <div className={s.flex}>
            <div>
                <img className={s.main_user}
                     src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg"/>
            </div>
            <div className={s.info}>
                <h4>{props.name}</h4>
                <p>{'Date of Birth: ' + props.date }</p>
                <p>{'City: ' + props.city}</p>
                <p>{'Education: ' + props.education}</p>
                <p>{'Web Site: ' + props.website}</p>
            </div>
        </div>
    )
}
