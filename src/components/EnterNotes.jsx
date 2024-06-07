import React, { useRef } from "react";
import send from "./../assets/send.svg";

function EnterNotes({id,addNote,addNotesSelected}) {
  let noteRef  = useRef()

  function addNoteHandler(){
       addNote(id,noteRef.current.value)
       addNotesSelected(id)
       noteRef.current.value = new String()
  }

  function keyDownHandler(e){
     if(e.key=="Enter"){
        addNoteHandler()
        
     }
  }

  return (
    <div className='w-full absolute bottom-0 md:w-[70%] border-[1.5rem] border-[#E8E8E8] rounded-md'>
      <textarea ref={noteRef} className='w-full border-0 rounded-md p-4 outline-none resize-none'
       onKeyDown={keyDownHandler}
       rows={5}   placeholder='Enter notes be carefull' />
      <img className='absolute  bottom-2 right-2 cursor-pointer' src={send} alt='send' onClick={addNoteHandler} />
    </div>
  );
}

export default EnterNotes;
