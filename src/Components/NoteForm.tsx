import React, { useState } from "react";

interface NoteFormProps {
  onAdd: (text: string) => void;
}
const NoteForm = ({ onAdd }: NoteFormProps) => { 
  const [text, setText] = useState(""); 

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const trimmed = text.trim();
    if (!trimmed) return; 

    onAdd(trimmed);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", gap: 8 }}>
      <input
        value={text}
        onChange={handleChange}
        placeholder="เขียนข้อความ..."
      />
      <button type="submit">เพิ่ม</button>
    </form>
  );
}

export default NoteForm; 