import React, { forwardRef, useImperativeHandle, useRef } from 'react'

let Modal = forwardRef(function Modal({addNewGroup},ref) {
    let modalRef = useRef()
    let nameRef = useRef("")
    let colorRef = useRef("")

    useImperativeHandle(ref,()=>({show}))

    function show(){
    
      modalRef.current.showModal()
    }

    function submitHandler(e){
        //   e.preventDefault()
          console.log("working")
    }



  return (
    <dialog ref={modalRef} className='p-4 rounded-md'>
      <h1 className='text-3xl font-medium my-3 px-4'>Create New Notes group</h1>
      <div className='my-3 px-4 flex gap-4  items-center'>
      <h2 className='text-2xl font-medium'>Group name</h2>
      <input placeholder='Enter you group name' ref={nameRef} className='px-2 py-1'/>
      </div>
      
      <div className='flex gap-4 my-3 px-4  items-center'>
        <h2 className='text-2xl font-medium'>Choose Color</h2>
        <div className='bg-[#B38BFA] w-8 h-8 rounded-full cursor-pointer'></div>
        <div className='bg-[#FF79F2] w-8 h-8 rounded-full cursor-pointer'></div>
        <div className='bg-[#F19576] w-8 h-8 rounded-full cursor-pointer'></div>
        <div className='bg-[#0047FF] w-8 h-8 rounded-full cursor-pointer'></div>
        <div className='bg-[#6691FF] w-8 h-8 rounded-full cursor-pointer'></div>
      </div>
      <form method='dialog' className='text-end' >
        <button className='text-white bg-black rounded-lg px-4 py-1 my-4 mx-2' onSubmit={submitHandler}>Create </button>
      </form>
    </dialog>
  )
})

export default Modal