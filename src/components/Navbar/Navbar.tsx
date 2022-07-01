import React from "react";
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";


export const Navbar = () => {
    return (
        <nav className={s.aside}>
            <div className={s.item}>
                <NavLink to="/main" activeClassName={s.active}>
                    Profile
                </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/dialogs" activeClassName={s.active}>
                    Messages
                </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/news">
                    News
                </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/music">
                    Music
                </NavLink>
            </div>
            <div className={`${s.aside_settings} ${s.item}`}>
                <NavLink to="/settings" activeClassName={s.active}>
                    Settings
                </NavLink>
            </div>

        </nav>
    )
}

