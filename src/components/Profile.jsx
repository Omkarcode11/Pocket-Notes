import React from "react";

function Profile({ name, color, id, setSelected, notes, select }) {
  let initials = "";
  if (name.includes(" ")) {
    initials = (name[0] + name.split(" ")[1][0]).toUpperCase();
  } else {
    initials = (name[0] + name[1]).toUpperCase();
  }


  function selectHandler() {
    setSelected(id);
  }

  return (
    <div
      className={`flex gap-4 items-center ml-2 py-2 cursor-pointer  p-4 ${
        select.id == id ? "bg-[#F7ECDC] rounded-s-lg" : ""
      }`}
      onClick={selectHandler}>
      <div className='text-white p-4 rounded-full' style={{backgroundColor:color}}>
        {initials}
      </div>
      <div>{name}</div>
    </div>
  );
}

export default Profile;
