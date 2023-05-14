import { Avatar } from "@mui/material";
import React, { useEffect, useState } from "react";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import VideocamIcon from "@mui/icons-material/Videocam";
import EventIcon from "@mui/icons-material/Event";
import ArticleIcon from "@mui/icons-material/Article";
import "./css/feed.css";
import Post from "./Post";
// import firebase from "firebase"
// import { db } from "./firebase"

function Feed() {

  // const [post,SetPost] = useState([]);
  // const [input,setInput] =useState();
  
  // const submitPost= (e)=>{
  //   e.preventDefault();
  //   db.collection('post').add({
  //     name : "Kuldip Chauhan",
  //     desc : "this is desc",
  //     message : input,
  //     photoURL : "https://images.unsplash.com/photo-1583089892943-e02e5b017b6a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGFudW1hbnxlbnwwfHwwfHw%3D&w=1000&q=80",
  //     timestamp : firebase.firestore.FieldValue.serverTimestamp(),
  //   });
  //   setInput("");
  // }

  // useEffect(() => {
  //   db.collection("post").orderBy("timestamp","desc").inSanpshot(sanpshot=>{
  //     SetPost(sanpshot.doc.map(doc=>({
  //     id:doc.id,
  //     data:doc.data()
  //   })))
  // })
  // },[])

  return (
    <div className="feed">
      <div className="feed_input">
        
        <div className="feed_form">
          <Avatar />
          {/* <form onSubmit={submitPost}>
            <input type="text" placeholder="Uplode Post" value={input} onChange={e => setInput(e.target.value)} />
            <input type="submit" />
          </form> */}
        </div>

        <div className="feed_options">
          <div className="options">
            <InsertPhotoIcon style={{ color: "#70b5f9" }} />
            <span>Photo</span>
          </div>
          <div className="options">
            <VideocamIcon style={{ color: "#7fc15e" }} />
            <span>Video</span>
          </div>
          <div className="options">
            <EventIcon style={{ color: "#e7a33e" }} />
            <span>Event</span>
          </div>
          <div className="options">
            <ArticleIcon style={{ color: "#fc9295" }} />
            <span>Article</span>
          </div>

        </div>
      </div>
      <Post/>
      {/* {
        post.map(({id,data:{name,desc,message,photoURL}})=>{
          return <Post key={id} name={name} desc={desc} message={message} photoURL={photoURL} />
        })
      } */}
    </div>
  );
}

export default Feed;
