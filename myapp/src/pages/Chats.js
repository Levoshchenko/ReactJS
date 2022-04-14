import MessageList from '../components/MessageList';
import ChatList from '../components/ChatList';
import ControlPanel from '../components/ControlPanel';

const Chats =() => {
    return (
        <div className='wrapper'>
            <ChatList/>
            <div className='messengerPlace'>
                <MessageList />
                <ControlPanel/>
            </div>
        </div>
    );
};

export default Chats;