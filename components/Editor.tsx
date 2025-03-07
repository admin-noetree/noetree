"use client";

import Placeholder from "@tiptap/extension-placeholder";
import { useEditor, EditorContent, Content } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

interface EditorProps {
  content: Content;
}

export default function Editor({ content }: Readonly<EditorProps>) {
  const editor = useEditor({
    content: content,
    extensions: [
      StarterKit,
      Placeholder.configure({
        placeholder: "Write something…",
      }),
    ],
    immediatelyRender: false,
  });

  return (
    <>
      <div className="flex gap-2"></div>
      <EditorContent editor={editor} />
    </>
  );
}
