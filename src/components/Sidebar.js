import React, { useState, useEffect } from 'react'
import '../styles/Sidebar.css'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord'
import CreateIcon from '@material-ui/icons/Create'
import SidebarOption from './SidebarOption'
import InsertCommentIcon from '@material-ui/icons/InsertComment'
import InboxIcon from '@material-ui/icons/Inbox'
import DraftsIcon from '@material-ui/icons/Drafts'
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder'
import FileCopyIcon from '@material-ui/icons/FileCopy'
import PeopleAltIcon from '@material-ui/icons/PeopleAlt'
import AppsIcon from '@material-ui/icons/Apps'
import ExpandLessIcon from '@material-ui/icons/ExpandLess'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import AddIcon from '@material-ui/icons/Add'
import db from '../firebase'
import { useStateValue } from './StateProvider'

const Sidebar = () => {
    const [{user}] = useStateValue();
    const [channels, setChannels] = useState([]);

    useEffect(()=>{
        db.collection('rooms').onSnapshot(snapshot =>(
            setChannels(
                snapshot.docs.map(doc =>({
                    id: doc.id,
                    name: doc.data().name
                }))
            )
        ))
    }, [])
  return (
    <div className='sidebar'>
        <div className='sidebar__header'>
            <div className='sidebar__info'>
                <h2>Test hounD</h2>
                <h3>
                    <FiberManualRecordIcon />
                    {user?.displayName}
                </h3>
            </div>
            <CreateIcon />
        </div>
        <SidebarOption Icon={InsertCommentIcon} title='Threads' />
        <SidebarOption Icon={InboxIcon} title='Saved' />
        <SidebarOption Icon={DraftsIcon} title='Mentions' />
        <SidebarOption Icon={BookmarkBorderIcon} title='Bookmarks' />
        <SidebarOption Icon={FileCopyIcon} title='File Sharing' />
        <SidebarOption Icon={PeopleAltIcon} title='Social' />
        <SidebarOption Icon={AppsIcon} title='Apps' />
        <SidebarOption Icon={ExpandLessIcon} title='Show Less' />
        <hr />
        <SidebarOption Icon={ExpandMoreIcon} title='Channels' />
        <hr />
        <SidebarOption Icon={AddIcon} title='Add Channel'addChannelOption={true} />
        <hr />
        {
           channels.map((channel, index)=>
            <SidebarOption key={index} title={channel.name} id={channel.id} />
            )
        }
    </div>
  )
}

export default Sidebar