export type Note = {
  id: number;
  title: string;
  slug: string;
  content: string;
};

// Simule une base de données avec des notes
const mockNotes: Note[] = [
  {
    id: 1,
    title: "Première note",
    slug: "premiere-note",
    content: "Ceci est la première note.",
  },
  {
    id: 2,
    title: "Deuxième note",
    slug: "deuxieme-note",
    content: "Voici une deuxième note pour tester.",
  },
  {
    id: 3,
    title: "Troisième note",
    slug: "troisieme-note",
    content: "Une autre note avec plus de contenu.",
  },
];

// Fonction pour récupérer toutes les notes (comme une requête SQL)
export async function getAllNotesServer(): Promise<Note[]> {
  return mockNotes;
}

// Fonction pour récupérer une note par son slug (comme une requête SQL)
export async function getNoteBySlugServer(slug: string): Promise<Note | null> {
  return mockNotes.find((note) => note.slug === slug) || null;
}

// Fonction pour créer une note (comme une requête SQL)
export async function createNoteServer(note: Note): Promise<void> {
  mockNotes.push(note);
}
