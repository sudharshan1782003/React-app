import React from 'react'
import Header from './header'
import Additems from './Additem'
import ApiRequest from "./ApiRequest"

const App = () => {
  const [items, setitems] = React.useState("")
  const [newitems, setnewitems] = React.useState([])
  const [Fetcherror, setFetcherror] = React.useState(null)
  const [isLoadind, setIsloading] = React.useState(true)
  const API_URL = "http://localhost:3500/items"

  React.useEffect(() => {
     const fetchItems = async() => {
      try{
          const response = await fetch(API_URL)
          if(!response.ok) throw Error("Data not received")
          const listitems = await response.json()
          setnewitems(listitems)
          setFetcherror(null)
      }
      catch (err){
         setFetcherror(err.message)
      }
      finally{
        setIsloading(false)
      }
     }
     setTimeout(()=> {
      (async () => await fetchItems())()
     }, 2000)
   
  }, [])

const HandleAdd = async (text) => {
  const id = newitems.length ? newitems[newitems.length - 1].id +1 : 1
  const Addnew = {id, checked : false, text}
  const list = [...newitems, Addnew]
  setnewitems(list)

const PostOpt = {
  method : "POST",
  headers: {
    "Content-Type" : "application/json"
  },
  body : JSON.stringify(Addnew)
}

const Solution = await ApiRequest(API_URL,PostOpt)
if(Solution) setFetcherror(Solution)

}
 const Handlecheck = async(id) => {
 const item = newitems.map(item => item.id === id ? {...item, checked : !item.checked} : item)
 setnewitems(item)
 const Myitem = newitems.filter(item => item.id===id)
 const UpdateOpt = {
  method : "PATCH",
  headers: {
    "Content-Type" : "application/json"
  },
  body : JSON.stringify({checked : Myitem[0].checked})
 }

 const requrl = `${API_URL}/${id}`
 const result = await ApiRequest(requrl, UpdateOpt)
 if(result) setFetcherror(result)

 }

 const HandleDelete = async (id) => {
  setnewitems((preval) => preval.filter((item) =>  item.id!==id))
  const DeleteOpt = {
    method : "DELETE"
  }
  const requrl = `${API_URL}/${id}`
 const result = await ApiRequest(requrl, DeleteOpt)
 if(result) setFetcherror(result)

 }

 const Handlesubmit = (e) => {
  e.preventDefault()
  if(!items) return;
  HandleAdd(items)
  setitems("")
 }


  return (
    <div className='p-5'>
   
   <Header />
   {Fetcherror && <p className='text-center'>{`${Fetcherror}`}</p>}
   {isLoadind &&  <p className='text-center'>Loading Items...</p>}
  {!isLoadind && !Fetcherror && <Additems
   items = {items}
   setitems = {setitems}
   newitems = {newitems}
   HandleDelete = {HandleDelete}
   Handlecheck = {Handlecheck}
   Handlesubmit = {Handlesubmit}
   
    />}
  
   </div>
  )
}

export default App