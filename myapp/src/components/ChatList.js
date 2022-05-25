/* eslint-disable react-hooks/exhaustive-deps */
import { Link, useParams } from 'react-router-dom';
import { Typography, List, Button, Dialog, DialogTitle, TextField } from '@mui/material';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import ListItemText from '@mui/material/ListItemText';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch, useSelector } from 'react-redux';
import {useEffect, useState} from 'react';
import {Paper} from '@mui/material';
import { addChatWithFB, deleteChatWithFB, initTrackerWithFB } from '../middlewares/middleware';



const ChatList =() => {
    const chats = useSelector((state) => state.chats.chatList);
    const [visible, setVisible] = useState(false);
    const [chatName, setChatName] = useState('');
    const dispatch = useDispatch();
    const { chatId } = useParams();

    const handleChatName = (e) => {
        setChatName(e.target.value);
    };

    const handleClose = () => {
        setVisible(false);
    };

    const handleAdd = () => {
        setVisible(true);
    };

    const handleSave = () => {
        dispatch(addChatWithFB(chatName));
        setChatName('');
        handleClose();
    };

    const deleteChat =(id) => {
        dispatch(deleteChatWithFB(id));
    };

    useEffect( () => {
        dispatch(initTrackerWithFB());
    }, [chatId]);
    
    return (
        <div>
            <Typography sx={{ mt: 4, mb: 2 }}   variant="h6" component="div">
                Список чатов
            </Typography>
            <List>
                {chats?.length > 0 ? chats.map((chat) => (
                    <Link to={ `/chats/${chat.id}` } key={chat.id}>
                        <ListItem
                            secondaryAction={
                                <IconButton edge="end" aria-label="delete" onClick={()=> deleteChat(chat.id)}>
                                    <DeleteIcon />
                                </IconButton>
                            }
                        >
                        <ListItemAvatar>
                            <Avatar/>
                        </ListItemAvatar>
                        <ListItemText
                            primary={chat.name}/>
                        </ListItem>
                    </Link>
                )) : (
                <div> Нет чатов </div> 
                )}
            </List>

            <Button onClick={handleAdd}>Добавить чат</Button>
            <Dialog open={visible} onClose={handleClose}>
                <Paper style ={{ padding:'10px'}}>
                    <DialogTitle>Введите имя чата</DialogTitle>
                    <TextField
                        placeholder='Имя чата'
                        value ={chatName}
                        onChange = {handleChatName}
                        fullWidth
                    />
                    <Button onClick={handleSave}> Сохранить чат </Button>
                </Paper>
            </Dialog>

        </div>
    )};

export default ChatList;