import logo from './logo.svg';
import './App.css';
import React from "react"

function App() {

 const [item, setitem] = React.useState("")

 function Handleinput(e){
   setitem(preval => preval.concat(e.target.name))
   e.preventDefault()
 }
 function Equal(e){
    setitem(preval => eval(preval))
    e.preventDefault()
 }
 function Ac(e){
  setitem(preval => preval = "")
  e.preventDefault()
 }
 function Clear(e){
  setitem(item.substring(0, item.length - 1))
  e.preventDefault()
 }



return(
  <form className='w-80  bg-pink-200 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 py-3 rounded-md'>
<input type='text' className='bg-blue-950 text-4xl w-72 ml-4 text-white text-right p-1' value={item} /><br></br>
<button className='bg-blue-950 p-3 w-14 mx-3 rounded-md hover:bg-gray-300 hover:text-black text-white mt-3 h-14'onClick={Handleinput} name='7'>7</button>
<button className='bg-blue-950 p-3 w-14 mx-3 rounded-md hover:bg-gray-300 hover:text-black text-white mt-3 h-14'onClick={Handleinput} name='8'>8</button>
<button className='bg-blue-950 p-3 w-14 mx-3 rounded-md hover:bg-gray-300 hover:text-black text-white mt-3 h-14'onClick={Handleinput} name='9'>9</button>
<button className='bg-red-500 p-3 w-14 mx-3 rounded-md hover:bg-gray-300 hover:text-black text-white mt-3 h-14'onClick={Ac} >Ac</button><br></br>
<button className='bg-blue-950 p-3 w-14 mx-3 rounded-md hover:bg-gray-300 hover:text-black text-white mt-3 h-14'onClick={Handleinput} name='4'>4</button>
<button className='bg-blue-950 p-3 w-14 mx-3 rounded-md hover:bg-gray-300 hover:text-black text-white mt-3 h-14'onClick={Handleinput} name='5'>5</button>
<button className='bg-blue-950 p-3 w-14 mx-3 rounded-md hover:bg-gray-300 hover:text-black text-white mt-3 h-14'onClick={Handleinput} name='6'>6</button>
<button className='bg-black p-3 w-14 mx-3 rounded-md hover:bg-gray-300 hover:text-black text-white mt-3 h-14'onClick={Clear}>C</button><br></br>
<button className='bg-blue-950 p-3 w-14 mx-3 rounded-md hover:bg-gray-300 hover:text-black text-white mt-3 h-14'onClick={Handleinput} name='1'>1</button>
<button className='bg-blue-950 p-3 w-14 mx-3 rounded-md hover:bg-gray-300 hover:text-black text-white mt-3 h-14'onClick={Handleinput} name='2'>2</button>
<button className='bg-blue-950 p-3 w-14 mx-3 rounded-md hover:bg-gray-300 hover:text-black text-white mt-3 h-14'onClick={Handleinput} name='3'>3</button>
<button className='bg-green-500 p-3 w-14 mx-3 rounded-md hover:bg-gray-300 hover:text-black text-white mt-3 h-14'onClick={Equal} >=</button><br></br>
<button className='bg-blue-950 p-3 w-14 mx-3 rounded-md hover:bg-gray-300 hover:text-black text-white mt-3 h-14'onClick={Handleinput} name='0'>0</button>
<button className='bg-blue-950 p-3 w-14 mx-3 rounded-md hover:bg-gray-300 hover:text-black text-white mt-3 h-14'onClick={Handleinput} name='00'>00</button>
<button className='bg-blue-950 p-3 w-14 mx-3 rounded-md hover:bg-gray-300 hover:text-black text-white mt-3 h-14'onClick={Handleinput} name='.'>.</button>
<button className='bg-blue-950 p-3 w-14 mx-3 rounded-md hover:bg-gray-300 hover:text-black text-white mt-3 h-14'onClick={Handleinput} name='%'>%</button><br></br>
<button className='bg-blue-950 p-3 w-14 mx-3 rounded-md hover:bg-gray-300 hover:text-black text-white mt-3 h-14' onClick={Handleinput} name='+'>+</button>
<button className='bg-blue-950 p-3 w-14 mx-3 rounded-md hover:bg-gray-300 hover:text-black text-white mt-3 h-14' onClick={Handleinput} name='-'>-</button>
<button className='bg-blue-950 p-3 w-14 mx-3 rounded-md hover:bg-gray-300 hover:text-black text-white mt-3 h-14' onClick={Handleinput} name='*'>*</button>
<button className='bg-blue-950 p-3 w-14 mx-3 rounded-md hover:bg-gray-300 hover:text-black text-white mt-3 h-14' onClick={Handleinput} name='/'>/</button>


</form>
)
}

export default App;
