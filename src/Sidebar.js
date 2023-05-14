import React from 'react'
import "./css/sidebar.css"
import { Avatar } from '@mui/material'

function Sidebar() {
  return (
    <div className='sidebar'>
        <div className='sidebar_profile'>
            <img src='https://wallpaperaccess.com/full/3949076.jpg'/>
            
            <div className='profile_details'>
                <Avatar/>
                <h4>Kuldip Chauhan</h4>
                <p>React Devloper</p>
            </div>
            <div className='profile_stats'>
                <span>Who viewed your profile</span>
                <span className='stat_number'>20</span>
            </div>
            <div className='profile_stats'>
                <span>Connection<br/><b>Grow Your Network</b></span>
                <span className='stat_number'>200</span>
            </div>
        </div>
        <div className='sidebar_recent'>
            <p>Recent</p>
            <p className='hash'><span>#</span>Devloper</p>
            <p className='hash'><span>#</span>Programming</p>
            <p className='hash'><span>#</span>Front-End</p>
            <p className='hash'><span>#</span>Back-End</p>
            <p className='hash'><span>#</span>Python</p>
            <p className='hash'><span>#</span>React</p>
            <p className='hash'><span>#</span>HTML-CSS-JS</p>
        </div>
    </div>
  )
}

export default Sidebar
