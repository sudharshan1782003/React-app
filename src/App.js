import React from 'react'
import Squares from './Squares'
import Toggletext from './toggletext'

const App = () => {
    const [Colorchange, setColorchange] = React.useState("")
  const [isText, setIsdarktext] = React.useState("")

  React.useEffect(() => {
    console.log("rendered")
  }, [Colorchange])

  return (
   <div className='mt-5'>
    <Squares
    Colorchange = {Colorchange}
    setColorchange = {setColorchange}
    isText = {isText}
    setIsdarktext = {setIsdarktext}
    />
    <Toggletext
     isText = {isText}
     setIsdarktext = {setIsdarktext}
     />
   </div>
  )
}

export default App