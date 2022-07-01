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

function App(props: PostDareType & DialogsDataType & MessageDataType) {




    // @ts-ignore
    return (
        <BrowserRouter>
            <p>beka</p>
            <div className="App">
                <Header/>
                <div className='elementFlex'>
                    <Navbar/>
                    <Route path='/dialogs' render={() => <Dialogs
                        dialogsData={props.dialogsData}
                        messageData={props.messageData}/>}/>
                    <Route path='/main' render={() => <Main postData={props.postData}
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

