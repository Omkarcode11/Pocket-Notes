import React from "react";
import backIcon from './../assets/back.svg'

function NoteHeader({ name, color,setShow }) {
  let initials = "";
  if (name.includes(" ")) {
    initials = (name[0] + name.split(" ")[1][0]).toUpperCase();
  } else {
    initials = (name[0] + name[1]).toUpperCase();
  }

  return (
    <div className='flex gap-4 items-center  bg-[#E8E8E8] px-4 py-4'>
      <div className="md:hidden cursor-pointer" onClick={()=>setShow(true)}>
        <img src={backIcon} alt="back"/>
      </div>
      <div className={` text-white p-4 rounded-full`} style={{backgroundColor:color}}>
        {initials}
      </div>
      <div>{name}</div>
    </div>
  );
}

export default NoteHeader;
