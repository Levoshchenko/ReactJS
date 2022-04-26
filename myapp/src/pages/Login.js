import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import useAuth from "../hooks/AuthProvider";

const Login = () => {
    let navigate = useNavigate();
    let location = useLocation();
    const auth = useAuth();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    let from = location.state?.from?.pathname || '/';

    const handleEmail = (e) => {
        setEmail(e.target.value);
    };

    const handlePassword = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        setError('');

            try {
                await auth.signin({email, password}, ()=> {
                    setTimeout(()=> navigate(from, {replace:true}), 
                    2000);
                });
            }  catch(e){
                toast.error('Ошибка!');
                setError(e);
                console.error(e);
            }     
    };


    return (
    <div> 
        <ToastContainer />
        <form onSubmit={handleSubmit}>
            <h2>Логин</h2>
            <br/>
            <p>Введите почту и пароль для авторизации</p>
            <div>
                <TextField 
                    placeholder='Введите email'
                    name='email'
                    type='email'
                    onChange={handleEmail}
                    value={email}
                    required

                />
            </div>
            <br/>
            <div>
                <TextField 
                    placeholder='Введите пароль'
                    name='password'
                    type='password'
                    onChange={handlePassword}
                    value={password}
                    required

                />
            </div>
            <br/>
            {error && <p>{error}</p> }
            <Button variant="outlined" type = "submit"> Войти </Button>
        </form>
    </div>
    );
};

export default Login;