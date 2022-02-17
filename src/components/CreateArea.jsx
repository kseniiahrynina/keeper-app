import React from "react";
import { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

function CreateArea(props) {
  const [isExpanded, setIsExpanded] = useState(false);

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

  const expand = () => {
    setIsExpanded(true);
  };

  return (
    <div>
      <form className="create-note">
        {isExpanded && (
          <input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
          />
        )}

        <textarea
          name="content"
          onClick={expand}
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 1}
        />
        <Zoom in={isExpanded}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
