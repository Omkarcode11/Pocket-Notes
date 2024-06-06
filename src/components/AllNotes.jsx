import React from 'react'
import Note from './Note'

function AllNotes({notes}) {
  return (
    <div className='bg-[#F7ECDC] h-[80vh] p-6'>
       {notes.map((ele)=>
        <Note time={ele.time} note={ele.note}/> 
    )}
    </div>
  )
}

export default AllNotes