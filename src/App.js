import React from 'react';
import logo from './logo.svg';
import './App.css';

import Title from './components/Title'
import MessageList from './containers/MessageList'
import MessageInput from './components/MessageInput'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Title/>
        <MessageList/>
        <MessageInput/>
      </header>
    </div>
  );
}

export default App;
