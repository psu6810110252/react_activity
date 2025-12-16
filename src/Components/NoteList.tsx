import type { Note } from "../types";

interface NoteListProps {
  notes: Note[];
  onDelete: (id: number) => void;
}

export default function NoteList({ notes, onDelete }: NoteListProps) {
  if (notes.length === 0) return <p>ยังไม่มีข้อความ</p>;

  return (
    <ul style={{ marginTop: 12 }}>
      {notes.map((note) => (
        <li key={note.id} style={{ display: "flex", gap: 8, marginBottom: 6 }}>
          <span>{note.text}</span>
          <button type="button" onClick={() => onDelete(note.id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}