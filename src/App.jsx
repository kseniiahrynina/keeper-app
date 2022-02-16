import React from "react";
import { useState } from "react";
import BurgerMenu from "./components/BurgerMenu";
import CreateArea from "./components/CreateArea";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Note from "./components/Note";
import notes from "./notes";

console.log(notes);

const App = () => {
  const [notes, setNotes] = useState([]);

  const addNote = (newNote) => {
    setNotes((prevNotes) => [...prevNotes, newNote]);
  };

  const deleteNote = (id) => {
    setNotes((prevNotes) => prevNotes.filter((note, index) => index !== id));
  };

  return (
    <>
      <BurgerMenu />
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((note, index) => (
        <Note
          title={note.title}
          content={note.content}
          onDelete={deleteNote}
          key={index}
          id={index}
        />
      ))}
      <Footer />
    </>
  );
};

export default App;
