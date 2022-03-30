import './App.css';
import Message from './Message';

function App(props) {
  return (
    <div className="App" >
      <header className="App-header">
        <Message text = {'Привет! Это мой первый текст.'} /> 
      </header>
    </div>
  );
}

export default App;
