import { Avatar } from '@mui/material'
import React from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import './css/post.css'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import CommentIcon from '@mui/icons-material/Comment';
import ShareIcon from '@mui/icons-material/Share';
import SendIcon from '@mui/icons-material/Send';

function Post({name,dis,message,photoURL}) {
  return (
    <div className='post'>
      <div className='post_header'>
        
        <div className='post_headerLeft'>
            <Avatar src={photoURL}/>
            <div className='post_profile_details'>
                <h3>{name}</h3>
                <p>{dis}</p>
            </div>
        </div>
        <MoreVertIcon/>
      </div>
      
      <div className='post_body'>
        <p>{message}</p>
      </div>

      <div className='post_footer'>
        <div className='post_footer_options'>
            <ThumbUpIcon/>
            <span>Like</span>
        </div>
        <div className='post_footer_options'>
            <CommentIcon/>
            <span>Comment</span>
        </div>
        <div className='post_footer_options'>
            <ShareIcon/>
            <span>Share</span>
        </div>
        <div className='post_footer_options'>
            <SendIcon/>
            <span>Send</span>
        </div>
      </div>
    </div>
  )
}

export default Post