import React from "react";
import s from './Header.module.css';

export const Header = () => {
    return (
        <div>
            <header className={s.header}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Playstation_logo_colour.svg/2560px-Playstation_logo_colour.svg.png"/>
            </header>
        </div>
    )
}

