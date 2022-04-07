import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Chats from "./Chats";
import Home from "./Home";
import Profile from "./Profile";
import { useState } from 'react';
import {AUTHOR} from '../constants/common';

const initialChats = {
    id1: {
        name: 'Чат 1',
        messages: [{text: 'Message from chat 1', author: AUTHOR.bot}]
    },
    id2: {
        name: 'Чат 2',
        messages: [{text: 'Message from chat 2', author: AUTHOR.bot}]
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
    return <BrowserRouter>

        <ul className="menu">
            <li className="menu-list">
                <Link to ='/'>Home</Link>
            </li>
            <li className="menu-list">
                <Link to ='/profile'>Profile</Link>
            </li>
            <li className="menu-list">
                <Link to ='/chats'>Chats</Link>
            </li>
        </ul>

        <Routes>
            <Route path="/" exact element={<Home />}/>
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/chats/:chatId" element={<Chats chats={chats} addMessage={addMessage}/>}/>
            <Route path="*" exact element={<Chats chats={chats}/>}/>
        </Routes>
    </BrowserRouter>;
};
export default Router;