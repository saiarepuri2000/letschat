import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import ChatIcon from '@material-ui/icons/Chat';

const Reply=(props)=>{
  const [reply, setreply] = useState({
    title: "",
    content: "",
    count:props.cnt
  });

  const handleChange=(event) =>{
    
    const { name, value } = event.target;
    
    setreply(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }
  
  const  submitNote=(event) =>{
    if(reply.title !== "" && reply.content !== "" && props.cntrc<2){
    props.onAdd(reply);
    props.onrc(props.cntrc+1);
    }
    if(props.cntrc === 2)
    {
      props.onrc(1);
    }
    setreply({
      title: "",
      content: ""
    });
    event.preventDefault();
  }
  return (
     <div>
      <form className="post">
        <h5><ChatIcon className="button1"/>Reply</h5>
       <input
            name="title"
            onChange={handleChange}
            value={reply.title}
            placeholder="Title"
          />
        <textarea
          name="content"
          onChange={handleChange}
          value={reply.content}
          placeholder="Add your reply..."
        />
        <Fab onClick={submitNote}>
          <AddIcon ></AddIcon>
        </Fab>
      </form>
     </div>
  )
}

export default Reply;
