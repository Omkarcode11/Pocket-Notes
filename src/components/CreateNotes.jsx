import React, { useEffect } from 'react'
import NoteHeader from './NoteHeader'
import EnterNotes from './EnterNotes'
import AllNotes from './AllNotes'

function CreateNotes({notes,select,addNote,addNotesSelected,setShow}) {

  return (
    <div className='top-0' style={{display:''}}>
       <NoteHeader name={select.groupName} color={select.color} setShow={setShow}/>
       <AllNotes notes={select.notes}/>
       
       <EnterNotes id={select.id} addNotesSelected={addNotesSelected} addNote={addNote}/>

    </div>
  )
}

export default CreateNotes