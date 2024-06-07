import React, { useRef, useState } from "react";
import Profile from "./Profile";
import Modal from "./Modal";

function LeftSection({ setSelected, select, notes, addNewGroup }) {
  let [modal, setModal] = useState(false);

  function openModal() {
    setModal(true);
  }

  function closeModal() {
    setModal(false);
  }

  function createGroupHandler() {
    openModal();
  }

  return (
    <>
      <h1 className='text-3xl font-semibold my-4'>Pocket Notes</h1>
      <button
        className='bg-black rounded-xl sm:w-11/12 text-white py-2 ml-2 px-4 my-4 text-2xl'
        onClick={createGroupHandler}>
        + Create Notes Group
      </button>
      {modal && <Modal show={modal} addNewGroup={addNewGroup} close={closeModal} />}
      {notes.map((ele) => (
        <Profile
          select={select}
          key={ele.id}
          name={ele.groupName}
          id={ele.id}
          color={ele.color}
          setSelected={setSelected}
          notes={notes}
        />
      ))}
    </>
  );
}

export default LeftSection;
