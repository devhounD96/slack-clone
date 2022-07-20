import { Button } from '@material-ui/core'
import React, { useState } from 'react'
import '../styles/ChatInput.css'
import db from '../firebase'
import { useStateValue } from './StateProvider'
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const ChatInput = ({channelName, channelId}) => {
    const [{user}] = useStateValue();
    const [input, setInput] = useState('');

    const sendMessage = (e) =>{
        e.preventDefault();
        if(channelId){
            console.log('inside')
            db
            .collection('rooms')
            .doc(channelId)
            .collection('messages')
            .add({
                message: input,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                user: user.displayName,
                userImage: user.photoURL
            })
            setInput('');
        }
    }
  return (
    <div className='chatInput'>
        <form>
            <input 
            onChange={(e)=>setInput(e.target.value)}
            value={input}
            placeholder={`message # ${channelName?.toLowerCase()}`}/>
            <Button onClick={sendMessage} type='submit'>SEND</Button>
        </form>
    </div>
  )
}

export default ChatInput