import { useEffect, useState } from "react";
import NoteForm from "./Components/NoteForm";
import NoteList from "./Components/NoteList";
import type { Note } from "./types";

const STORAGE_KEY = "notes";

export default function App() {
  const [notes, setNotes] = useState<Note[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) return [];
    try {
      return JSON.parse(saved) as Note[];
    } catch {
      return [];
    }
  });

  const addNote = (text: string) => {
    const newNote: Note = { id: Date.now(), text };
    setNotes((prev) => [newNote, ...prev]);
  };

  const deleteNote = (id: number) => {
    setNotes((prev) => prev.filter((n) => n.id !== id));
  };

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
  }, [notes]);

  return (
    <div style={{ width: 800 }}>
      <h1>📚 Sticky Notes App 📚 </h1>
      <NoteForm onAdd={addNote} />
      <NoteList notes={notes} onDelete={deleteNote} />
    </div>
  );
}