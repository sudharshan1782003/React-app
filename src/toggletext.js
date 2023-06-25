import React from 'react'


const Toggletext = ({isText, setIsdarktext}) => {
  return (
    <div className='absolute top-3/4 left-1/2 -translate-x-1/2 -translate-y-1/2'>
        <button 
        className='bg-gray-100 p-1 rounded-md shadow-black shadow-md' 
        onClick={() => setIsdarktext(!isText)}>
            Toggle Text Colour
        </button>
        </div>
  )
}

export default Toggletext