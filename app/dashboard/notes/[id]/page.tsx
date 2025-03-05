"use client";

import { useState } from "react";
import NotesTree from "@/components/NotesTree";
import NoteContent from "@/components/NoteContent";
import ResizablePanel from "@/components/ResizablePanel";
import { sampleNotes } from "@/data/sampleNotes";

export default function Note() {
  const [selectedNote, setSelectedNote] = useState(sampleNotes[0]);

  return (
    <ResizablePanel
      leftPanel={
        <NotesTree
          notes={sampleNotes}
          selectedNote={selectedNote}
          onSelectNote={setSelectedNote}
        />
      }
      rightPanel={<NoteContent note={selectedNote} />}
      cookieKey="notePagePanelWidth"
    />
  );
}
