import React, { useRef } from 'react'
import Profile from './Profile'
import Modal from './Modal'

function LeftSection({setSelected,select,notes,addNewGroup}) {
    let modal = useRef()

    function createGroupHandler(){
        modal.current.show()
    }


  return (
    <div className='col-span-1 p-5 pr-0'>
        <h1 className='text-3xl font-semibold my-4'>Pocket Notes</h1>
        <button className='bg-black rounded-xl text-white py-2 ml-2 px-4 my-4' onClick={createGroupHandler}>+ Create Notes Group</button>
        <Modal addNewGroup={addNewGroup} ref={modal}/>
        {notes.map((ele)=><Profile select={select} key={ele.id} name={ele.groupName} id={ele.id} color={ele.color} setSelected={setSelected} notes={notes}/>)}

    </div>
  )
}

export default LeftSection