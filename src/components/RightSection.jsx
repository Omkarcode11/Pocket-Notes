import React from "react";
import NotSelected from "./NotSelected";
import CreateNotes from "./CreateNotes";

function RightSection({ select, notes, addNote, addNotesSelected, setShow }) {
  return (
    <>
      {select.id == null ? (
        <NotSelected />
      ) : (
        <CreateNotes
          setShow={setShow}
          addNotesSelected={addNotesSelected}
          addNote={addNote}
          notes={notes}
          select={select}
        />
      )}
    </>
  );
}

export default RightSection;
