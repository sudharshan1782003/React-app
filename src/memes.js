import React from "react"
import data from "./data"

export default function Memes(){


   const [item, Setitem] = React.useState({
        toptext : "",
        bottomtext : "",
        randomimage : "salman khan.jpg"
   })

   const [Newitem, setnewitem] = React.useState(data)

   function Getmeme(){
    const getmemes = Newitem.data.memes;
    const Random = Math.floor(Math.random() * getmemes.length)
    const url = getmemes[Random].url
    Setitem(Preval => {
        return{
            ...Preval,
            randomimage : url
        } 
   })
   }

   function Handleinput(e){
    const {name, value} = e.target
    Setitem(Preval => {
        return{
            ...Preval,
            [name] : value
        }
    
    })

   }


    return(
        <main className="p-36">
            <div className="grid grid-cols-2">
                <input 
                type="text"
                placeholder="Top text" 
                className="w-3/5 ml-44  border-2 border-violet-900 outline-none rounded-sm pl-2"
                name="toptext"
                value={item.toptext}
                onChange={Handleinput} 
                  />
                <input 
                type="text" 
                placeholder="Bottom text" 
                className="w-3/5 border-2 border-violet-900 outline-none rounded-sm pl-2"
                name="bottomtext"
                value={item.bottomtext}
                onChange={Handleinput}
                />
                <button className= "bg-purple-900 text-white p-2 ml-72 w-11/12 mt-4 rounded-md" onClick={Getmeme}>Get a Random Meme</button>
                
                
            </div>
            <div className="w-1/2 h-60 pt-12 relative left-64">
            <img src={`../${item.randomimage}`}  />
            <div className="absolute bottom-0 py-3 px-4 w-full text-center text-white font-extrabold text-5xl srok ">
            <h2 className="text pb-12">{item.toptext}</h2>
            <h2 className="text pt-2">{item.bottomtext}</h2>
            

            </div>
            </div>
        </main>
    )
}