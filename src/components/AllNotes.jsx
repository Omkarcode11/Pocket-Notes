import React from 'react'
import Note from './Note'

function AllNotes({notes}) {
  return (
    <div className='bg-[#F7ECDC] h-[67vh] p-8 overflow-auto'>
       {notes.map((ele,i)=>
        <Note key={i} time={ele.time} note={ele.note}/> 
    )}
    </div>
  )
}

export default AllNotes