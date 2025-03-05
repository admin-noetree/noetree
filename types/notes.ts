export interface Note {
  id: number;
  title: string;
  content: string;
  notes?: Note[];
}
