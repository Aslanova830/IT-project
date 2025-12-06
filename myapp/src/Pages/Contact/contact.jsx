import React from 'react'

const Contact = () => {

  const OnClick =() => {
    window.alert('The message was sent. Thank you!')
  }


  return (
    <div className="p-[70px] flex items-center justify-between">
      <div className='ml-[50px] mt-[50px]'>
        <div>
          <h1 className='font-semibold text-2xl '>Contact with us:</h1>
          <p className='font-medium text-xl'>+994 55 718 68 58</p>
        </div>

        <br />
        <div>
          <h1 className='font-semibold text-2xl'>Place:</h1>
          <p className='font-medium text-xl'>IT INNOVATIONS ACADEMY</p>
        </div>

<br />
        <div>
          <h1 className='font-semibold text-2xl'>Email us:</h1>
          <p className='font-medium text-xl'>ilhamshabanov965@gmail.com</p>
        </div>
      </div>

      <div className='border-[3px] border-gray-200 rounded-xl mt-[40px] mr-[40px]'>
        <form className=" border-gray-200 rounded-2xl p-5">
          <input
            className="border-[1px] rounded-2xl border-gray-400 p-6 mb-[20px]"
            type="text"
            placeholder="name"
          />
          <br />
          <input
            className="border-[1px] rounded-2xl border-gray-400 p-6"
            type="text"
            placeholder="write your message here"
          />
          <br />
          <button onClick={OnClick} className="bg-blue-400 text-white text-[23px] p-2 rounded-[10px] mt-[40px]" >
            Send a message 
          </button>
        </form>
      </div>

    </div>
  );
}

export default Contact;