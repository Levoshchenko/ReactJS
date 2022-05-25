import {Routes, Route, Link } from "react-router-dom";
import Chats from "./Chats";
import Home from "./Home";
import Profile from "./Profile";
import Gists from "./Gists";
import Login from "./Login";
import Registration from "./Registration";
import RequireAuth from "../hocs/RequireAuth";


const Router = () => {
    return (
    <div>
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
            <li className="menu-list">
                <Link to ='/gists'>Гистс</Link>
            </li>
            <li className="menu-list">
                <Link to ='/login'>Логин</Link>
            </li>
            <li className="menu-list">
                <Link to ='/registration'>Регистрация</Link>
            </li>
        </ul>

        <Routes>
            <Route path="/" exact element={<Home />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/registration" element={<Registration />}/>
            <Route element = {<RequireAuth />}>
                <Route path="/profile" element={<Profile />}/>
                <Route path="/gists" element={<Gists />}/>
                <Route path="/chats/:chatId" element ={<Chats />} />
            </Route>
            <Route path="*" element={<Chats />}/>
        </Routes>
    </div>
    );
};

export default Router;