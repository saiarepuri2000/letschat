import React, { useState } from "react";
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbDownAltIcon from '@material-ui/icons/ThumbDownAlt';
import Reply from "./Reply"
const  Note=(props) =>{
  const [cnt,setCnt] = useState(0);
  const [replycnt,setreplycnt] = useState(0);
  const [reply,setReply] = useState([]);
  const addcount=(count)=>
  {
    setreplycnt(count);
  }
  const  addReply=(newReply)=>
  {
       setReply(prevReply =>{
         return [...prevReply,newReply];
       })
       
  }
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
          replycnt<=2?(
          
        <Reply onAdd = {addReply} onCount={addcount} count={replycnt}/>
          ):(<Reply/>)
        }
        {
          reply.map((replyItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={replyItem.title}
            content={replyItem.content}
          />
        );
      })}
      </div>
  );
}

export default Note;
