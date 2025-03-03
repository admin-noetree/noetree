"use client";

import { useState } from "react";
import { markdownRules } from "./components/markdownRules";

interface Note {
  id: number;
  title: string;
  content: string;
  notes?: Note[];
}

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

export default function Home() {
  const [selectedNote, setSelectedNote] = useState<Note>(notes[0]);
  const [content, setContent] = useState("");

  const selectNote = (note: Note) => {
    setSelectedNote(note);
  };

  const renderNotesTree = (notes: Note[]) => {
    return (
      <ul className="list-disc ml-4">
        {notes.map((note) => (
          <li key={note.id}>
            <button type="button" onClick={() => selectNote(note)}>
              {note.title}
            </button>
            {note.notes && renderNotesTree(note.notes)}
          </li>
        ))}
      </ul>
    );
  };

  const parseMarkdownToHtml = (text: string): string => {
    let output = text;
    for (const rule of markdownRules) {
      output = output.replace(rule.pattern, rule.renderReplacement);
    }
    return output;
  };

  const highlightMarkdownSymbols = (text: string): string => {
    let output = text;
    for (const rule of markdownRules) {
      output = output.replace(rule.pattern, rule.highlightReplacement);
    }
    return output;
  };

  const htmlOutput = parseMarkdownToHtml(content);
  const highlightOutput = highlightMarkdownSymbols(content);

  return (
    <div className="w-full h-screen flex">
      <div className="h-full grow-2 p-4">
        <h2>Notes tree</h2>
        {renderNotesTree(notes)}
      </div>
      <div className="h-full grow-3 p-4">
        <h2>{selectedNote.title}</h2>
        <div>
          <div className="relative">
            <pre
              className="absolute inset-0 pointer-events-none p-2"
              dangerouslySetInnerHTML={{ __html: highlightOutput }}
            />
            <textarea
              className="w-full border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-transparent"
              rows={10}
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>
          <div>
            <h3>Aperçu HTML :</h3>
            <pre
              className="border p-2 rounded-lg"
              dangerouslySetInnerHTML={{ __html: htmlOutput }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
