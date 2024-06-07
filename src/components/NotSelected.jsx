import React from 'react'
import Note from './../assets/note.svg'
import Lock from './../assets/lock.svg'

function NotSelected() {
  return (
    <div className='bg-[#F7ECDC] h-full flex flex-col items-center justify-between pt-12'>
     <div></div>
     <div className='flex justify-center items-center flex-col gap-4 text-center'>
        <img src={Note} alt='note' className='text-center w-3/4'/>
     <h1 className='text-6xl font-semibold text-center'>
        Pocket Notes
     </h1>
     <p >
     Send and receive messages without keeping your phone online.
Use Pocket Notes on up to 4 linked devices and 1 mobile phone
     </p>
     </div>
     <div className='flex gap-2 mb-4'>
        <img src={Lock} alt='lock'/>
        end-to-end encrypted
     </div>
    </div>
  )
}

export default NotSelected