import React from 'react'

const Squares = ({Colorchange, setColorchange, isText}) => {

  


  return (
    <div className=' absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
        <div  
        className='border-2 border-black w-52 h-10 py-24 text-center mb-3 shadow-black shadow-md' 
        style={{backgroundColor : Colorchange, color: isText ? "black" : "white"}}
        >{Colorchange ? Colorchange : "empty colours"}</div>
        <input 
        type='text' 
        autoFocus 
        placeholder='Type a colour' 
         value = {Colorchange} 
         className='border-2 border-gray-500 rounded-md pl-2 ' 
         onChange={(e) => setColorchange(e.target.value)}
          />

    </div>
  )
}

export default Squares