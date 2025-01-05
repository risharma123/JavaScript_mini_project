
import { useState } from 'react'
import './App.css'
import StartGame from './component/StartGame'
import GamePlay from './component/GamePlay';

function App() {
 const[isSelected,setIsSelected]=useState(true);
  const handleToggleButton=()=>{
    setIsSelected((prev)=>!prev)
  }

  return (
    <>
    {isSelected? <GamePlay/>:<StartGame toggle={handleToggleButton}/>}
     
    </>
  )
}

export default App
