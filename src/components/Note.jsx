import React from 'react'

function Note({time,note}) {
  return (
    <div className='text-start flex gap-2 my-4 px-4'>
        {/* <div className=''> */}
            <p>{time}</p>
            <p>{note}</p>
        {/* </div> */}
        
    </div>
  )
}

export default Note