import React from "react";
import send from "./../assets/send.svg";

function EnterNotes() {
  return (
    <div className='absolute bottom-0 w-10/12 border-[1.5rem] border-[#E8E8E8] rounded-md'>
      <textarea className='w-full border-0 rounded-md p-4 outline-none' rows={5}  placeholder='Enter notes be carefull' />
      <img className='absolute  bottom-2 right-2 cursor-pointer' src={send} alt='send' />
    </div>
  );
}

export default EnterNotes;
