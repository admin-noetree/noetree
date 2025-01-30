"use client";

import Link from "next/link";
import { useState } from "react";

export default function Notes() {
  const [notes, setNotes] = useState([]);

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center gap-4">
      <h1 className="text-4xl">Notes</h1>
      <ul>
        {notes.map((note) => (
          <li>
            <Link></Link>
          </li>
        ))}
        <li>
            Nouvelle note
        </li>
      </ul>
    </div>
  );
}
