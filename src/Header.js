import React from "react";
import SearchIcon from '@mui/icons-material/Search';
import "./css/header.css"
import Headeroptions from "./Headeroptions";
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Avatar } from "@mui/material";

function Header() {
  return (
    <div className="header">
      <div className="header_left">
        <div className="header_logo">
            <img src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png"/>
        </div>
        
        <div className="header_search">
            <SearchIcon/>
            <input type="text" placeholder="Search"/>
        </div>
      </div>

      <div className="header_right">
        <Headeroptions Icon={HomeIcon} title="Home"/>
        <Headeroptions Icon={PeopleIcon} title="My Network"/>
        <Headeroptions Icon={BusinessCenterIcon} title="Jobs"/>
        <Headeroptions Icon={MessageIcon} title="Message"/>
        <Headeroptions Icon={NotificationsIcon} title="Notification"/>
        <Headeroptions avatar={Avatar} title="Kuldip Chauhan"/>       
      </div>
    </div>
  );
}

export default Header;
