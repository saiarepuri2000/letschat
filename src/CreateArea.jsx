import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";


function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    
    const { name, value } = event.target;
    
    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }
  
  function submitNote(event) {
    if(note.title !== "" && note.content !== ""){
    props.onAdd(note);
    }
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }
 

  return (
    <div>
      <h1 className="posthead">🌻 let's chat 🌻</h1>
      <form className="create-post">
          <h4>New Post</h4>
          <input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
          />
        <textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Add your content..."
        />
        <Fab onClick={submitNote}>
          <AddIcon ></AddIcon>
        </Fab>
      </form>
    </div>
  );
}

export default CreateArea;
