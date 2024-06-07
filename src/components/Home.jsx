import React, { useEffect, useState } from "react";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import { notes } from "../utils/dummyData";

function Home() {
  const [allNotes, setAllNotes] = useState(null);
  const [selected, setSelected] = useState({ id: null });

  const [show, setShow] = useState(true);

  function addNewGroup(name, color) {
    let id = Math.floor(Math.random() * 10000);
    let obj = { id: id, groupName: name, color, notes: [] };
    setAllNotes((prev) => [...prev, obj]);
  }

  function selectProfile(id) {
    setSelected(() => allNotes.find((ele) => ele.id == id));
    setShow(false);
  }

  function addNotesSelected(note) {
    setSelected({ ...allNotes.find((ele) => ele.id == note) });
  }

  function addNotes(id, note) {
    let date = new Date();
    let time = date.toLocaleTimeString();
    const options = { day: "numeric", month: "long", year: "numeric" };
    const formattedDate = date.toLocaleDateString("en-US", options);
    setAllNotes((prev) => {
      let obj = prev.find((ele) => ele.id == id);
      obj.notes.push({
        time: { time, date: formattedDate },
        note,
      });
      return prev;
    });
  }

  useEffect(() => {
    let localNotes = localStorage.getItem("pocketNotes");
    if (localNotes != null) {
      setAllNotes(JSON.parse(localNotes));
    } else {
      setAllNotes(notes);
    }
  }, []);

  useEffect(() => {
    if (allNotes != null) {
      let notes = JSON.stringify(allNotes);
      localStorage.setItem("pocketNotes", notes);
    }
  });

  if (allNotes == null) {
    return <h1 className='6xl'>Loading...</h1>;
  }

  return (
    <div className='sm:relative md:grid md:grid-cols-10 h-[100vh]'>
      <div
        className={`${
          !show && "hidden"
        } md:block md:col-span-3 p-5 pr-0 h-full overflow-x-scroll`}>
        <LeftSection
          select={selected}
          setSelected={selectProfile}
          notes={allNotes}
          addNewGroup={addNewGroup}
        />
      </div>

      <div className={`${show && "hidden"} md:block md:col-span-7`}>
        <RightSection
          setShow={setShow}
          key={selected.id}
          select={selected}
          addNotesSelected={addNotesSelected}
          notes={allNotes}
          addNote={addNotes}
        />
      </div>
    </div>
  );
}

export default Home;
