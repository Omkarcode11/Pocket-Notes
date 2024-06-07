import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import ColorRadioButtons from "./ColorButtons";

let Modal = forwardRef(function Modal({ show, addNewGroup, close }, ref) {
  const [selectedColor, setSelectedColor] = useState("#43E6FC");
  let [error, setError] = useState(false);
  let modalRef = useRef();
  let nameRef = useRef("");
  let submitRef = useRef();

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  function submitHandler(e) {
    e.preventDefault();
    if (nameRef.current.value.trim().length) {
      addNewGroup(nameRef.current.value, selectedColor);
      close();
    } else {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 200);
    }

    nameRef.current.value = "";
  }

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      close();
    }
  };

  const handlePressKey = (e) => {
    if (e.key == "Enter") {
      submitRef.current.click();
    }
  };

  useEffect(() => {
    if (show) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    window.addEventListener("keypress", handlePressKey);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("keydown", handlePressKey);
    };
  }, [show]);

  if (!show) {
    return null;
  }

  return (
    <div
      ref={modalRef}
      className='p-4 rounded-md fixed bg-slate-100 w-[22rem] md:w-auto sm:left-[5rem] top-1/3 md:left-1/3'>
      <h1 className='text-3xl font-medium my-3 px-4'>Create New Notes group</h1>
      <div className='my-3 px-4 flex flex-wrap gap-4  items-center'>
        <h2 className='text-2xl font-medium'>Group name</h2>
        <input
          placeholder='Enter you group name'
          ref={nameRef}
          className='px-2 py-2 text-xl outline-none'
        />
      </div>

      <div className='flex gap-4 my-3 px-4  items-center'>
        <h2 className='text-2xl font-medium'>Choose Color</h2>
        <ColorRadioButtons
          selectedColor={selectedColor}
          handleColorChange={handleColorChange}
        />
      </div>
      <form className='text-end' onSubmit={submitHandler}>
        <button
          className='text-white text-2xl bg-black rounded-lg px-4 py-1 my-4 mx-2'
          type='submit'
          ref={submitRef}>
          Create
        </button>
      </form>
      <p className='text-red-600 text-center'>
        {error && "Enter valid group name"}
      </p>
    </div>
  );
});

export default Modal;
