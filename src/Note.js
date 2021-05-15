import React, { useState } from "react";
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbDownAltIcon from '@material-ui/icons/ThumbDownAlt';
import Reply from "./Reply"
const  Note=(props) =>{
  const [cnt,setCnt] = useState(0);
  const [rc,setrc] = useState(props.replycount);
  const [reply,setReply] = useState([]);
  const  addReply=(newReply)=>
  {
       setReply(prevReply =>{
         return [...prevReply,newReply];
       })
       
  }
  const handlerc = (newrc)=>{
    setrc(newrc);
  }
  // console.log(props.replycount);
  return (
      <div className="post">
        <h1>{props.title}</h1>
        <p>{props.content}</p>
        <button className="button1" onClick={()=>setCnt(cnt+1)}>
          <ThumbUpAltIcon/>{cnt}
        </button>
        <button className="button1" onClick={()=>setCnt(cnt-1)}>
          <ThumbDownAltIcon/>
        </button>
        {
          
        <Reply onAdd = {addReply} cntrc={rc} onrc={handlerc}/>
        }
        {
          reply.map((replyItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={replyItem.title}
            content={replyItem.content}
            replycount = {rc}
            addcount = {handlerc}
          />
        );
      })}
      </div>
  );
}

export default Note;
