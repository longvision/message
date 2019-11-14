import React, {useState} from 'react';

// import { Container } from './styles';
import axios from 'axios';
import qs from 'qs'

export default function MessageInput() {

  const [message, setMessage] = useState("");
    async function sendMessage (e) {
    e.preventDefault();
    console.log('The link was clicked.');
   await axios({
    method: 'post',
    url: 'http://localhost:3001/comments',
    data: qs.stringify({
      name: 'User 1',
      text: message
    }),
    headers: {
      'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
    }
  })
  }
  function handleChange(event) {
    setMessage(event.target.value)
  }
    return (
    <footer className="teal">
  <form className="container">
    <div className="row">
      <div >
        <i />
        <input type="text" value={message} onChange={handleChange} placeholder="Type your message" />
      </div>
      <div>
        <button type="submit" onClick={sendMessage}style={{color: '#fff',backgroundColor:'#48285b',height:44, width:90}}>
          Submit
        </button>
      </div>
    </div>
  </form>
</footer>
)
}
