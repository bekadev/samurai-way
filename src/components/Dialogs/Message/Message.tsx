import React from "react";
import s from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";
import {message} from "antd";




export const Message = (props: any) => {
    return (
        <div className={s.messages}>
            {props.message}
        </div>
    )
}

