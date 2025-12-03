import React from 'react'

const Contact = () => {
  return (
    <div className='p-[70px] flex items-center justify-center'>
      
      <form className=' border-gray-200 rounded-2xl m-[200px]'>
        <input className='border-[1px] rounded-2xl border-gray-400 p-6 mb-[20px]' type="text" placeholder='name'/>
        <br />
        <input className='border-[1px] rounded-2xl border-gray-400 p-6' type="text" placeholder='reason'/>
        <br />
        <button className='bg-blue-400 text-white text-[23px] p-2 rounded-[10px] mt-[40px]'>Send a message</button>
      </form>
    </div>
  )
}

export default Contact;