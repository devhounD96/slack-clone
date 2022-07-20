import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/SidebarOption.css'
import db from '../firebase'

const SidebarOption = ({Icon, title, id, addChannelOption}) => {
  let navigate = useNavigate();
  const selectChannel = () =>{
    if(id){
      navigate(`/rooms/${id}`);
    }
    else{
      navigate(title);
    }
  }
  const addChannel = () =>{
    const channelName = prompt('Enter Channel Name');
    if(channelName){
     db.collection('rooms').add({
      name: channelName
     })
    }
  }
  return (
    <div className='sidebarOption'
         onClick={addChannelOption ? addChannel : selectChannel}>
        {Icon && <Icon className='sidebarOption__icon' />}
        {Icon ? <h3>{title}</h3> : 
        <h3 className='sidebarOption__channel'><span className='sidebarOption__hash'>#</span>{title}</h3>}
    </div>
  )
}

export default SidebarOption