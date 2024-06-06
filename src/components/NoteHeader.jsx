import React from 'react'

function NoteHeader({name,color}) {
    let initials = (name[0] + name.split(" ")[1][0]).toUpperCase()
    return (
      <div className='flex gap-4 items-center  bg-[#E8E8E8] px-4 py-4'>
          <div className={`bg-[${color}] p-4 rounded-full`}>{initials}</div>
          <div>{name}</div>
      </div>
    )
}


export default NoteHeader