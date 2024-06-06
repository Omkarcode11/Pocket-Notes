import React, { useState } from 'react'
import LeftSection from './LeftSection'
import RightSection from './RightSection'
import { notes } from '../utils/dummyData'

function Home() {
  const [allNotes,setAllNotes] = useState(notes)
  const [selected,setSelected] = useState({id:null})
//   console.log(selected)

  function addNewGroup(name,color){
    let obj = {name,color,notes:[]}
      setAllNotes(prev=>[...prev,obj])
  }



  return (
    <div className='grid  grid-cols-6 h-[100vh]'>
        <LeftSection select={selected} setSelected={setSelected} notes={allNotes} addNewGroup={addNewGroup}/>
        <RightSection select={selected} notes={allNotes} />
    </div>
  )
}

export default Home