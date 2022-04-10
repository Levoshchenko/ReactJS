import { Link } from 'react-router-dom';
import { Typography, List } from '@mui/material';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import ListItemText from '@mui/material/ListItemText';
import DeleteIcon from '@mui/icons-material/Delete';
import { MyThemeContext } from '../App';
import { useContext } from 'react';


const ChatList =({chats}) => {
    const contextValue = useContext(MyThemeContext);

    return (
        <div>
            <Typography sx={{ mt: 4, mb: 2 }}   variant="h6" component="div">
                Список чатов
                <br/>
                Тема: <h2>{contextValue.theme}</h2>
                <button className='button' onClick={()=>contextValue.setTheme(contextValue.theme ==='dark' ? 'light' : 'dark')}>Сменить тему</button>
            </Typography>
            <List>
                {Object.keys(chats).map((chat, index) => (
                    <Link to={ `/chats/${chat}` } key={index}>
                        <ListItem
                            key ={index}
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
                            primary={chats[chat].name}
                        />
                        </ListItem>
                    </Link>
                ))}
            </List>
        </div>
    )};

export default ChatList;