import React from 'react'

const Additems = ({items, setitems, newitems, HandleDelete, Handlecheck,Handlesubmit}) => {

   
   
   
    

  return (
    <main className='p-10'>
    <form className='flex content-center justify-center ' onSubmit={Handlesubmit}  >
    <input type='text' autoComplete='off'  value={items} onChange={(e) => setitems(e.target.value)} className='border-b-2 border-pink-200 outline-none' />
    <div className='px-2 ' > <button type='submit' className='bg-pink-100 px-1 rounded-md py-1' >Add Input</button></div>
    </form>
    { (newitems.length) ? (
    <article>
        <section className='flex flex-col justify-center items-center pt-12 '>
           { newitems.map((item) => {
            return (
                <div className='bg-pink-100 p-5 w-72 rounded-md mb-2'>
                <input type='checkbox' className='mr-2' checked={item.checked} onChange={() => Handlecheck(item.id)}  />
                <label key={item.id} className='pr-14 pl-3' style={{textDecoration : item.checked ? "line-through" : null}}>{item.text}</label>
                <button className='bg-red-400 px-1 rounded-md' onClick={() => HandleDelete(item.id)}>Delete</button>
                </div>
            )
           })}
           
            </section>

    </article>
     ) : (
            <p className='text-center pt-10'>your list is empty</p>
     )
                     
    }         
    </main>
  )
        } 

export default Additems