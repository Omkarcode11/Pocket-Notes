import React from "react";
import note from "./../assets/note.svg";
import lock from "./../assets/lock.svg";
import NotSelected from "./NotSelected";
import EnterNotes from "./EnterNotes";
import CreateNotes from "./CreateNotes";

function RightSection({ select,notes}) {
  return (
    <div className='col-span-5'>
      {select.id == null ? <NotSelected /> : <CreateNotes notes={notes} select={select} />}
    </div>
  );
}

export default RightSection;
