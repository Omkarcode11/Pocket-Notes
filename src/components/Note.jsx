import React from 'react'

function Note({time,note}) {
  return (
    <div className='text-start grid grid-cols-3  my-4 px-6'>
        {/* <div className=''> */}
            <p className='col-span-1'>
              <p>{time.time}</p>
              <p>{time.date}</p>
            </p>
            <p className='col-span-2'>{note}</p>
        {/* </div> */}
        
    </div>
  )
}

export default Note