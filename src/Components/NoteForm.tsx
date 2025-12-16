import React, { useState } from 'react';
interface NoteFormProps {
  onAddNote: (text: string) => void;}
const NoteForm: React.FC<NoteFormProps> = ({ onAddNote }) => {
  const [noteText, setNoteText] = useState('');
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (noteText.trim()) {
      onAddNote(noteText.trim());
      setNoteText('');
    }
  };
  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <textarea
        value={noteText}
        onChange={(e) => setNoteText(e.target.value)}
        placeholder="พิมพ์โน้ตใหม่ที่นี่..."
        rows={4}
        cols={50}
        style={{ display: 'block', width: '100%', padding: '8px', boxSizing: 'border-box' }}
      />
      <button type="submit" style={{ marginTop: '8px', padding: '10px 15px' }}>
        เพิ่มโน้ต
      </button>
    </form>
  );
};

export default NoteForm;