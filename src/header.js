import React from "react";

export default function Header(){
    return(
        <header className='flex h-30 bg-purple-900 p-5 text-white'>
        <img src='../Troll Face.png' className='w-10 pr-2' />
        <h1 className='font-bold text-lg'>Meme Generator</h1>
        <p className='ml-auto'>React Project-3</p>
      </header>
    )
}