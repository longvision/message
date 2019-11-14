import React, {useState, useEffect, Fragment}from 'react';
// import{useSelector} from 'react-redux'
import moment from 'moment'
import axios from 'axios'
// import { Container } from './styles';

export default function MessageList() {

  const [comments, setComments] = useState([]);

  async function  loadComments (){
    let response = await axios.get('http://localhost:3001/comments')
    setComments(response.data)
  }
  useEffect(()=>{
    loadComments()
  },[comments])
  
  useEffect(()=>{
    loadComments()
  },[])

  return(<Fragment> {comments.map(comment => (<div key={comment.id}>
                 <ul>
                   <li>
                     <span style={{color:'#000', fontSize:17, padding:10}}> {comment.text} from 
                     </span>
                     <span style={{color:'#000', fontSize:17,padding:10}}> {comment.name} 
                    </span>
                    <span style={{color:'#000', fontSize:17, padding:10}}>
                      time: {moment(comment.dateAdded).format('LTS')} 
                   </span>
                   </li>
               </ul>
               </div>
            ) 
        )}
          </Fragment>
  )
}
