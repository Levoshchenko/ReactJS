import { useParams } from 'react-router-dom';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { AccountCircle, Android } from '@mui/icons-material';
import {AUTHOR} from '../constants/common';
import { useSelector } from 'react-redux';

const MessageList = () => {
    const allMessages =useSelector((state) => state.messages.messageList);
    const {name} = useSelector((state) => state.profile);
    let {chatId} = useParams();

    if (!allMessages[chatId]) return null;

    const messages = allMessages[chatId]; 

    const isAuthorBot = (author) => {
        return author === AUTHOR.bot;
    };

    return (
        <>
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {messages.map((element) => (
                <div className="messages" key = {element.id}>
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar alt="Remy Sharp">
                                {isAuthorBot(element.author) ? (<Android/>
                                ) :( 
                                <AccountCircle/>
                                )}
                            </ Avatar>
                        </ListItemAvatar>
                    <ListItemText
                        primary = {isAuthorBot(element.author) ? AUTHOR.bot : name}
                        secondary={
                                <Typography
                                    sx={{ display: 'inline' }}
                                    component="span"
                                    variant="body2"
                                    color="text.primary"
                                >
                                    {element.text}
                                </Typography>
                        }
                    />
                </ListItem>
            <Divider variant="inset" component="li" />

            </div> 

            ))}
            </List>
        </>
    );
};

export default MessageList;