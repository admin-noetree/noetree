import { Note } from '@/types/notes';

export const sampleNotes: Note[] = [
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
