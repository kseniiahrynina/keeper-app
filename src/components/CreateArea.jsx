import React from "react";
import { useState } from "react";

function CreateArea(props) {
  const initState = {
    title: "",
    content: "",
  };

  const [note, setNote] = useState(initState);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setNote((prevNote) => ({ ...prevNote, [name]: value }));
  };

  const submitNote = (e) => {
    props.onAdd(note);
    setNote(initState);
    e.preventDefault();
  };

  return (
    <div>
      <form>
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
          placeholder="Take a note..."
          rows="3"
        />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
