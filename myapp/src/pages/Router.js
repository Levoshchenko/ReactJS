import {Routes, Route, Link } from "react-router-dom";
import Chats from "./Chats";
import Home from "./Home";
import Profile from "./Profile";
import { useState } from 'react';
import {AUTHOR} from '../constants/common';
import Gists from "./Gists";

const initialChats = {
    id1: {
        name: 'Чат 1',
        messages: [
            {text: 'Сообщения из чата 1', author: AUTHOR.bot}]
    },
    id2: {
        name: 'Чат 2',
        messages: [{text: 'Сообщения из чата 2', author: AUTHOR.bot}]
    }
};

const Router = () => {
    const [chats, setChats] = useState(initialChats);

    const addMessage = ( chatId, message) => {
        setChats( { ...chats, [chatId]:{
            name: chats[chatId].name,
            messages : [...chats[chatId].messages, message]
        }})
    }
    return <>

        <ul className="menu">
            <li className="menu-list">
                <Link to ='/'>Главная</Link>
            </li>
            <li className="menu-list">
                <Link to ='/profile'>Профиль</Link>
            </li>
            <li className="menu-list">
                <Link to ='/chats'>Чаты</Link>
            </li>
            <li className="gists">
                <Link to ='/gists'>Gists</Link>
            </li>
        </ul>

        <Routes>
            <Route path="/" exact element={<Home />}/>
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/gists" element={<Gists/>}/>
            <Route path="/chats">
                <Route index element={<Chats chats={chats} />}/>
                <Route path=":chatId" element={<Chats chats={chats} addMessage={addMessage}/>}/>
            </Route>
            <Route path="*" exact element={<Chats chats={chats}/>}/>
        </Routes>
    </>;
};
export default Router;