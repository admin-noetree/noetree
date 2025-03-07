import { Note } from "@/types/notes";

export const sampleNotes: Note[] = [
  {
    id: 1,
    title: "Main Note",
    content: "",
    notes: [
      {
        id: 2,
        title: "First Sub Note",
        content: "",
      },
      {
        id: 3,
        title: "Second Sub Note",
        content: "",
        notes: [
          {
            id: 4,
            title: "First Sub Sub Note",
            content: "",
          },
        ],
      },
    ],
  },
];
