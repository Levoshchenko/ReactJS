import {Fab, useTheme } from '@mui/material';
import ForwardToInboxOutlinedIcon from '@mui/icons-material/ForwardToInboxOutlined';
import TextField from '@mui/material/FilledInput';
import {useState, useRef, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {addMessage} from '../store/messages/actions';
import {AUTHOR} from '../constants/common';

const ControlPanel = () => {
    let {chatId} = useParams();
    const [value, setValue] = useState('');
    const theme = useTheme();
    const inputRef = useRef(null);
    const dispatch = useDispatch();
    const author = useSelector((state)=> state.profile.name);
    const allMessages = useSelector((state)=> state.messages.messageList);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const messages = allMessages[chatId] || [];

    const handleInput = (event) => {
        setValue(event.target.value);
    };

    const handlerClick = (event) => {
        event.preventDefault();
        if (value !== ''){
            const newMessage = { 
                text: value, 
                author: author};
                dispatch(addMessage(chatId, newMessage));
                setValue('');
                inputRef.current?.focus();
        }
    };

    useEffect( () => {
        inputRef.current?.focus();
    }, []);
    
    useEffect( ()=>{
        let timerId;
        if (
            messages?.length>0 && 
            messages[messages.length-1].author !== AUTHOR.bot
            ) {
            timerId = setTimeout(() => {
            dispatch(addMessage(chatId, newMessage));
        }, 1500);
        const newMessage = { text: 'Здравствуйте! Введите Ваше сообщение.', author: AUTHOR.bot};
    }
    
    return ()=>{
        if(timerId){
            clearTimeout(timerId);
        }
    };
}, [messages, chatId, dispatch]);

    return (
        <div>
        <div className='controlPanel'> 
            <TextField 
                inputRef={inputRef}
                label="Outlined secondary" 
                color="secondary" 
                placeholder={'Напиши сюда'} 
                value = {value}
                onChange = {handleInput}
            /> 

            <Fab
                style ={ {
                    backgroundColor :theme.palette.secondary.main
                } }
                onClick={handlerClick} 
                color="secondary" 
                aria-label="add">
                <ForwardToInboxOutlinedIcon/>
            </Fab>
        </div>
    </div>
    );
};

export default ControlPanel;