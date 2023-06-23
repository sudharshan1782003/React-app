import React from 'react'

const Additems = () => {

    const [items, setitems] = React.useState("")
    const [newitems, setnewitems] = React.useState([])

   const Handlechange = (e) => {
    e.preventDefault()

    const item = {
        id: Date.now(),
        text : items,
        complete : false
    }
   setnewitems((preval) => [...preval, item ])
   setitems("")
    console.log(newitems)
   
}
   const Handlecheck = (id) => {
   setnewitems((preval) => preval.map((todo) => todo.id===id ? {...todo, complete : !todo.complete} : todo) )
   }

   const HandleDelete = (id) => {
    setnewitems((preval) => preval.filter((item) =>  item.id!==id))
   }

 

   
   
    

  return (
    <main className='p-10'>
    <form className='flex content-center justify-center '  onSubmit={Handlechange}>
    <input type='text' autoComplete='off'  value={items.text} name='value' onChange={(e) => setitems(e.target.value)} className='border-b-2 border-pink-200 outline-none' />
    <div className='px-2 ' > <button type='submit' className='bg-pink-100 px-1 rounded-md py-1' >Add Input</button></div>
    </form>
    { (newitems.length) ? (
    <article>
        <section className='flex flex-col justify-center items-center pt-12'>
           { newitems.map((item, id) => {
            return (
                <div className='bg-pink-100 p-5 w-72 rounded-md'>
                <input type='checkbox' className='mr-2' checked={item.complete} onChange={() => Handlecheck(item.id)}  />
                <label key={item.id} className='pr-14 pl-3' style={{textDecoration : item.complete ? "line-through" : null}}>{item.text}</label>
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