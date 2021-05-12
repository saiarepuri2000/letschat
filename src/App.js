import React, { useState } from "react";
import Note from "./Note";
import CreateArea from "./CreateArea";

const App=()=> {
  const [notes, setNotes] = useState([]);

  const addNote=(newNote) =>{
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
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
          />
        );
      })}
    </div>
  );
}

export default App;
