import React from 'react';
export interface Note {
  id: string;
  title: string;
  content: string;
}
interface NoteListProps {
  notes: Note[];
  onDeleteNote: (id: string) => void;
}

const NoteList: React.FC<NoteListProps> = ({ notes, onDeleteNote }) => {
  return (
    <div className="note-list" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '20px' }}>
      {notes.map((note) => (
        <div 
          key={note.id} 
          style={{ 
            border: '1px solid #ddd', 
            borderRadius: '8px', 
            padding: '16px', 
            width: '200px',
            backgroundColor: '#fff',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
          }}
        >
          <h3 style={{ marginTop: 0 }}>{note.title}</h3>
          <p>{note.content}</p>
          <button 
            onClick={() => onDeleteNote(note.id)}
            style={{ 
              backgroundColor: '#ff4d4f', 
              color: 'white', 
              border: 'none', 
              padding: '4px 8px', 
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default NoteList;