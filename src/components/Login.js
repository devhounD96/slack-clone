import { Button } from '@material-ui/core'
import React from 'react'
import '../styles/Login.css'
import { auth, provider } from '../firebase'
import { useStateValue } from './StateProvider'
import { actionTypes } from './reducer'

const Login = () => {
  const [state, dispatch] = useStateValue();
    const signIn = () =>{
        auth
        .signInWithPopup(provider)
        .then((result)=>{
            console.log(result)
            dispatch({
              type: actionTypes.SET_USER,
              user: result.user
            })
        })
        .catch((err)=>{
            alert(err.message);
        })
    }
  return (
    <div className='login'>
       <div className='login__container'>
        <img alt='slack logo' 
        src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Slack_icon_2019.svg/127px-Slack_icon_2019.svg.png?20200128081203' />
        <h1>Sign Into hounD's Slack</h1>
        <p>hound.slack.com</p>
        <Button onClick={signIn}>Sign In with Google</Button>
       </div>
    </div>
  )
}

export default Login