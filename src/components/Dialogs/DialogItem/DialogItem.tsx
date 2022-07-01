import React from "react";
import s from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";
import {message} from "antd";


export const DialogItem = (props: any) => {
    return (
        <div className={s.item + ' ' + s.active}>
            <NavLink to={'/dialog/' + props.id} >
                {props.name}
            </NavLink>
        </div>
    )
}
