import { NoteForm } from './NoteForm';
import { NoteData, Tag } from './App';

interface NewNoteProps {
  onSubmit: (data: NoteData) => void;
  onAddTag: (tag: Tag) => void;
  availbleTags: Tag[];
}

export function NewNote({ onSubmit, onAddTag, availbleTags }: NewNoteProps) {
  return (
    <>
      <h1 className="mb-4">New Note</h1>
      <NoteForm
        onSubmit={onSubmit}
        onAddTag={onAddTag}
        availableTags={availbleTags}
      ></NoteForm>
    </>
  );
}
