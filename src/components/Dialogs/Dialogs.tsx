import React from "react";
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";


type MessageDataTypeProps = {
    id: number
    message: string
}
export type MessageDataType = {
    messageData: MessageDataTypeProps[]
}

type DialogsDataTypeProps = {
    id: number
    name: string
}
export type DialogsDataType = {
    dialogsData: DialogsDataTypeProps[]
}

export const Dialogs = (props: DialogsDataType & MessageDataType) => {
    let dialogElements = props.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);
    let messagesElements = props.messageData.map(message => <Message message={message.message}/>)

    return (
        <div className={s.flex}>
            <div className={s.left}>
                {dialogElements}
            </div>
            <div className={s.right}>
                <div className={s.flex}>
                    <img src="https://logos-world.net/wp-content/uploads/2020/12/Lays-Logo.png" alt=""/>
                    {messagesElements}
                </div>
            </div>
        </div>
    )
}