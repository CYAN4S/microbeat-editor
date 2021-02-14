import React, { useState, useEffect } from "react";
import { Note } from "./Note";

function NoteListEditor(props: {
  notes: Note[]
  onAddNew: (value: Note) => void;
  onDelete: (i: number) => void;
}) {
  const [inputNote, setInputNote] = useState(new Note(0, 0));
  const [notes, setNotes] = useState(props.notes);

  const handleInputChange = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>) => {
    setInputNote({ ...inputNote, [target.name]: +target.value });
  };

  const onAddNew = () => {
    props.onAddNew(inputNote);
    setInputNote(new Note(0, 0));
  };

  const onDelete = (i: number) => {
    props.onDelete(i);
  };

  useEffect(() => {
    setNotes(props.notes);
  }, [props.notes]);

  return (
    <div>
      {notes.map((note, i) => (
        <div key={`${i}/${note}`}>
          ({i}) Line {note.line} / {note.beat}
          <input type="button" value="삭제" onClick={() => onDelete(i)} />
        </div>
      ))}
      <input
        type="number"
        value={inputNote.line}
        name="line"
        onChange={handleInputChange}
      />
      <input
        type="number"
        value={inputNote.beat}
        name="beat"
        onChange={handleInputChange}
      />
      <input type="button" value="Add new" onClick={onAddNew} />
    </div>
  );
}

export default NoteListEditor;
