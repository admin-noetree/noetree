import Link from "next/link";
import { createNoteServer, getAllNotesServer } from "../lib/mockDatabase";

export default async function Notes() {
  const notes = await getAllNotesServer();

  const defaultNote = {
    id: notes.length + 1,
    title: "Nouvelle note",
    slug: "nouvelle-note",
    content: "Contenu de la nouvelle note",
  };

  async function createNote() {
    await createNoteServer(defaultNote);
  }

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center gap-4">
      <h1 className="text-4xl">Notes</h1>
      <ul>
        {notes.map((note) => (
          <li key={note.id}>
            <Link href={`/notes/${note.slug}`}>{note.title}</Link>
          </li>
        ))}
        <li>
          <button onClick={() => createNote()}>Nouvelle note</button>
        </li>
      </ul>
    </div>
  );
}
