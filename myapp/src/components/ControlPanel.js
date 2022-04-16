import {Fab, useTheme } from '@mui/material';
import ForwardToInboxOutlinedIcon from '@mui/icons-material/ForwardToInboxOutlined';
import TextField from '@mui/material/FilledInput';
import {useState, useRef, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {addMessageWithThunk} from '../store/messages/actions';

const ControlPanel = () => {
    let {chatId} = useParams();
    const [value, setValue] = useState('');
    const theme = useTheme();
    const inputRef = useRef(null);
    const dispatch = useDispatch();
    const author = useSelector((state)=> state.profile.name);



    const handleInput = (event) => {
        setValue(event.target.value);
    };

    const handlerClick = (event) => {
        event.preventDefault();
        if (value !== ''){
            const newMessage = { 
                text: value, 
                author: author};
                dispatch(addMessageWithThunk(chatId, newMessage));
                setValue('');
                inputRef.current?.focus();
        }
    };

    useEffect( () => {
        inputRef.current?.focus();
    }, []);
    
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