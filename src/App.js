import React, { useState } from "react";
import Note from "./Note";
import CreateArea from "./CreateArea";

const App=()=> {
  const [notes, setNotes] = useState([]);
  const [replycnt,setreplycnt] = useState(0);
  
  const addNote=(newNote) =>{
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
  }
  const handlecount = (newcount)=>{
    setreplycnt(newcount)
  }
  
  return (
    <div>
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            replycount = {replycnt}
            addcount = {handlecount}
          />
        );
      })}
    </div>
  );
}

export default App;
