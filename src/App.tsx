import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Main} from "./components/Main/Main";
import {Dialogs, DialogsDataType, MessageDataType} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from 'react-router-dom';
import {Music} from "./components/Music/Music";
import {News} from "./components/News/News";
import {Settings} from "./components/Settings/Settings";
import {MainInfo, MainInfoPropsType} from "./components/Main/MainInfo/MainInfo";
import {PostDareType} from "./components/Main/MyPosts/MyPosts";

type PropsType = {
    state: PostDareType & DialogsDataType & MessageDataType
}

function App(props: PropsType) {
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <div className='elementFlex'>
                    <Navbar/>
                    <Route
                        path='/dialogs' render={() => <Dialogs
                        dialogsData={props.state.dialogsData}
                        messageData={props.state.messageData}/>}/>
                    <Route path='/main' render={() => <Main postData={props.state.postData}
                                                            name='Bekzat K.'
                                                            date='25 February'
                                                            city='Almaty'
                                                            education='KAU'
                                                            website='bekapng.kz'/>}/>
                    <Route path='/news' render={() => <News />}/>
                    <Route path='/music' render={() => <Music />}/>
                    <Route path='/settings' render={() => <Settings />}/>
                </div>

            </div>
        </BrowserRouter>
    );
}

export default App;

