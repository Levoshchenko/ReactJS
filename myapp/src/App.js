import './App.css';
import React, {useEffect, useState} from 'react';
import Message from './components/Message';
import {AUTHOR} from "./constants/common";


function App() {
  const [messageList, setMessageList] = useState( []); //{text: ' ', author:' '}
  
  const [value, setValue] = useState('');

  console.log('messageList----', messageList);

  const handleInput = (event) => {
    setValue(event.target.value);
  }

  const handlerClick = () => {
    if (value !== ''){
      const newMessage = { text:value, author: AUTHOR.me};
      setMessageList([...messageList, newMessage]);
    }
  }

  useEffect( ()=>{
    let timer;
    if (messageList.length>0 
      && messageList[messageList.length-1].author !== AUTHOR.bot){
      timer = setInterval(()=>{
        setMessageList([...messageList, newMessage])
      }, 1500);
        const newMessage = { text: 'Здравствуйте! Введите Ваше сообщение.', author: AUTHOR.bot}
    }
    return ()=>{
      if(timer){
        clearInterval(timer);
      }
    }
  }, [messageList])
  return (
    <div className="App" >
      <header className="App-header">
        <h3>Список сообщений: </h3>
        <br/>
        {messageList.map(element => (<Message text = {element} />))}
        <div>
          <input className='input' 
            placeholder={'Напиши сюда'} 
            value = {value}
            onChange = {handleInput}/>
          <button className='button' 
            onClick={handlerClick}>Нажми здесь</button>
        </div>   
      </header>
    </div>
  );
}

export default App;
