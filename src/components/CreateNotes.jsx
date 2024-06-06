import React from 'react'
import NoteHeader from './NoteHeader'
import EnterNotes from './EnterNotes'
import AllNotes from './AllNotes'

function CreateNotes({notes,select}) {
  return (
    <div className=''>
       <NoteHeader name={select.groupName} color={select.color}/>
       <AllNotes notes={select.notes}/>
       
       <EnterNotes/>

    </div>
  )
}

export default CreateNotes