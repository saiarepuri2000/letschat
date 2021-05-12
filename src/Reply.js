import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import ChatIcon from '@material-ui/icons/Chat';

function Reply(props){
  const [reply, setreply] = useState({
    title: "",
    content: "",
    count:props.cnt
  });

  function handleChange(event) {
    
    const { name, value } = event.target;
    
    setreply(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }
  
  function submitNote(event) {
    if(reply.title !== "" && reply.content !== "" && props.count<=3){
    props.onAdd(reply);
    props.onCount(props.count+1);
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