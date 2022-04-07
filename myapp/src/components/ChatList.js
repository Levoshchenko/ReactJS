import { Link } from 'react-router-dom';
import { Typography, List } from '@mui/material';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import ListItemText from '@mui/material/ListItemText';
import DeleteIcon from '@mui/icons-material/Delete';


const ChatList =({chats}) => {

    return (
        <div>
            <Typography sx={{ mt: 4, mb: 2 }}   variant="h6" component="div">
                Список чатов
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