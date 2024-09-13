import { useState } from 'react'
import './App.css'

function App() {
  const [range , setRange] = useState(6)
  const [numbers , setNumbers] = useState(false)
  const [characters , setCharacters] = useState(false)
  console.log(range);
  

  return (
    <div className='h-screen w-full bg-slate-500 pt-5 text-white'>
      <div className="passwordGenerator w-1/2 m-auto rounded-md bg-black p-5">
      <h1 className='text-white text-2xl text-center mt-0 h-10 align-middle flex items-center justify-center'>Password Generator</h1>
      <input type="text" className='pl-2' placeholder='password' readOnly/>
      <br />
      <div className='flex gap-4 justify-center'>
      <input type="range"  value={20} id='range' min={20} max={19}/>
      <label htmlFor="range" className='text-white'>Range</label>
      <input type="checkbox"onClick={()=> setNumbers(true)} id='number'/>
      <label htmlFor="number" >Number</label>
      <input type="checkbox" onClick={()=> setCharacters(true)} id='character'/>
      <label htmlFor="character" >Character</label>
      </div>
      </div>
    </div>
  )
}

export default App
