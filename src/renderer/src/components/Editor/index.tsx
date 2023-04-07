import Highlight from "@tiptap/extension-highlight";
import Typography from "@tiptap/extension-typography";
import StarterKit from "@tiptap/starter-kit";
import Document from "@tiptap/extension-document";
import { EditorContent, useEditor } from "@tiptap/react";
import Placeholder from "@tiptap/extension-placeholder";

interface EditorProps {
  content: string
}

export function Editor({ content }: EditorProps) {
  const editor = useEditor({
    extensions: [
      Document.extend({
        content: 'heading block*'
      }),
      StarterKit.configure({
        document: false,
      }),
      Highlight,
      Typography,
      Placeholder.configure({
        placeholder: 'Untitled',
        emptyEditorClass: 'before:content-[attr(data-placeholder)] before:text-gray-500 before:h-0 before:float-left before:pointer-events-none'
      })
    ],
    content,
    autofocus: 'end',
    editorProps: {
      attributes: {
        class: 'outline-none prose prose-invert prose-headings:mt-0'
      }
    }
  })

  return <EditorContent className="w-[65ch]" editor={editor} />
}