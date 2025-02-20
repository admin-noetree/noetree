"use client";

import { useState } from "react";

interface Note {
  id: number;
  title: string;
  content: string;
  notes?: Note[];
}

export default function Home() {
  const notes: Note[] = [
    {
      id: 1,
      title: "Main Note",
      content: "This is the main note",
      notes: [
        {
          id: 2,
          title: "First Sub Note",
          content: "This is the first sub note",
        },
        {
          id: 3,
          title: "Second Sub Note",
          content: "This is another sub note",
          notes: [
            {
              id: 4,
              title: "First Sub Sub Note",
              content: "This is a detailed sub sub note",
            },
          ],
        },
      ],
    },
  ];

  const [selectedNote, setSelectedNote] = useState<Note>(notes[0]);

  const renderNotes = (notes: Note[]) => {
    return (
      <ul className="list-disc ml-4">
        {notes.map((note) => (
          <li key={note.id}>
            <button type="button" onClick={() => selectNote(note)}>
              {note.title}
            </button>
            {note.notes && renderNotes(note.notes)}
          </li>
        ))}
      </ul>
    );
  };

  const selectNote = (note: Note) => {
    setSelectedNote(note);
  };

  return (
    <div className="w-full h-screen flex">
      <div className="h-full grow-2 p-4">
        <h2>Notes tree</h2>
        {renderNotes(notes)}
      </div>
      <div className="h-full grow-3 p-4">
        <h2>{selectedNote.title}</h2>
        <p>{selectedNote.content}</p>
      </div>
    </div>
  );
}
