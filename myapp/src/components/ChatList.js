import { Link } from 'react-router-dom';
import { Typography, List, Button, Dialog, DialogTitle, TextField } from '@mui/material';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import ListItemText from '@mui/material/ListItemText';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch, useSelector } from 'react-redux';
import {useState} from 'react';
import { addChat } from '../store/chats/actions';
import {Paper} from '@mui/material';



const ChatList =() => {
    const chats = useSelector((state) => state.chats.chatList);
    const [visible, setVisible] = useState(false);
    const [chatName, setChatName] = useState('');
    const dispatch = useDispatch();

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
        dispatch(addChat(chatName));
        setChatName('');
        handleClose();
    };
    
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
                                <IconButton edge="end" aria-label="delete">
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