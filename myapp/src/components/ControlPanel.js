import {Fab, useTheme } from '@mui/material';
import ForwardToInboxOutlinedIcon from '@mui/icons-material/ForwardToInboxOutlined';
import TextField from '@mui/material/FilledInput';
import {useState, useRef, useEffect} from 'react';
import { AUTHOR } from '../constants/common';
import {useParams} from 'react-router-dom';

const ControlPanel = ({addMessage}) => {
    let {chatId} = useParams();
    const [value, setValue] = useState('');
    const theme = useTheme();
    const inputRef = useRef(null);



    const handlerClick = (event) => {
        event.preventDefault();
        if (value !== ''){
            const newMessage = { 
                text: value, 
                author: AUTHOR.me};
                addMessage(chatId, newMessage);
                setValue('');
                inputRef.current?.focus();
        }
    };

    const handleInput = (event) => {
        setValue(event.target.value);
    };

    const onKeyDown = (event) => {
        if (event.key === 'Enter') {
        handlerClick()
        };
    };

    useEffect( ( ) => {
        inputRef.current?.focus();
    }, []);
    
/* useEffect( ()=>{
        let timer;
        if (messageList?.length>0 
        && messageList[messageList.length-1].author !== AUTHOR.bot){
        timer = setTimeout(()=>{
        setMessageList([...messageList, newMessages])
        }, 1500);
        const newMessages = { text: 'Здравствуйте! Введите Ваше сообщение.', author: AUTHOR.bot}
    }

    return ()=>{
        if(timer){
            clearTimeout(timer);
        }
    }
}, [messageList]);*/

    return (
        <div className='controlPanel'> 
            <TextField 
                inputRef={inputRef}
                label="Outlined secondary" 
                color="secondary" 
                placeholder={'Напиши сюда'} 
                value = {value}
                onChange = {handleInput}
                onKeyDown={onKeyDown} 
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
    );
};

export default ControlPanel;