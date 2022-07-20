import React from 'react'
import '../styles/Header.css'
import { Avatar } from '@material-ui/core'
import AccessTimeIcon from '@material-ui/icons/AccessTime'
import SearchIcon from '@material-ui/icons/Search'
import HelpOutlineIcon from '@material-ui/icons/HelpOutline'
import { useStateValue } from './StateProvider'

const referrerPolicy = {referrerPolicy:"no-referrer"}

const Header = () => {
  const [{user}] = useStateValue();
  return (
    <div className='header'>
        <div className='header__left'>
            <Avatar
            imgProps={referrerPolicy}
            src={user?.photoURL}
            alt={user?.displayName} 
            className='header__avatar' />
            <AccessTimeIcon />
        </div>
        <div className='header__search'>
            <SearchIcon />
            <input placeholder='search Vishnu!'/>
        </div>
        <div className='header__right'>
            <HelpOutlineIcon />
        </div>
    </div>
  )
}

export default Header