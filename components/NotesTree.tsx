import { Note } from "@/types/notes";

interface NotesTreeProps {
  notes: Note[];
  selectedNote: Note;
  onSelectNote: (note: Note) => void;
}

export default function NotesTree({
  notes,
  selectedNote,
  onSelectNote,
}: Readonly<NotesTreeProps>) {
  const renderNotesTree = (notes: Note[]) => {
    return (
      <ul className="list-disc ml-4 space-y-1">
        {notes.map((note) => (
          <li key={note.id} className="py-1">
            <button
              type="button"
              onClick={() => onSelectNote(note)}
              className={`hover:text-blue-600 transition-colors cursor-pointer ${
                selectedNote.id === note.id ? "font-bold text-blue-700" : ""
              }`}
            >
              {note.title}
            </button>
            {note.notes && renderNotesTree(note.notes)}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-3">Notes tree</h2>
      {renderNotesTree(notes)}
    </div>
  );
}
