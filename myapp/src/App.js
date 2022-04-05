import './App.css';
import React, {useEffect, useState} from 'react';
import Messages from './components/Messages';
import {AUTHOR} from './constants/common';
import {Fab } from '@mui/material';
import ForwardToInboxOutlinedIcon from '@mui/icons-material/ForwardToInboxOutlined';
import TextField from '@mui/material/FilledInput';
import ChatList from './components/ChatList';

function App(props) {
  const [messageList, setMessageList] = useState( []); //{text: ' ', author:' '}
  const [value, setValue] = useState('');
  const [list, setList] = useState([{}]);


  const handleInput = (event) => {
    setValue(event.target.value);
  }

  const handlerClick = () => {
    if (value !== ''){
      const newMessages = { 
        text:value, 
        author: AUTHOR.me};
        setMessageList([...(messageList || []), newMessages]);
        setValue('');
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
        handlerClick()
    }
}

  useEffect( ()=>{
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
  }, [messageList])
    return (
      <div className="App" >
        <header className="App-header">
          <div className="Chat">
            <h4>Список чатов</h4>
            {list[list.length - 1].hasOwnProperty('name') && (
            <ChatList
              chatAuthor={list[list.length - 1].id}
              chatLastAuthor={messageList[messageList.length - 1].author}
              chatLastText={messageList[messageList.length - 1].text}
            />
            )}
          </div>
          <h3>Список сообщений: </h3>
          <br/>
          <Messages messages = {messageList}/>

          <div>
            <TextField 
              label="Outlined secondary" 
              color="secondary" 
              placeholder={'Напиши сюда'} 
              value = {value}
              autoFocus={true}
              onChange = {handleInput}
              onKeyPress={handleKeyPress}/> 

            <Fab onClick={handlerClick} 
              color="secondary" 
              aria-label="add">
              <ForwardToInboxOutlinedIcon/>
            </Fab>

          </div>   
        </header>
      </div>
  );
}

export default App;
