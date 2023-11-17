import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState ('Olive')

  function changeColor(color){
    setColor(color)
  }

  return (
  <div className=' w-full h-screen  duration-200 bg-black' style={{backgroundColor:color}}>
    <div className=' fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 '>
       <div className=' flex flex-wrap justify-center gap-3 shadow-lg  bg-black px-6 py-2 rounded-3xl'>
          <button className=' outline-none px-3 py-2 rounded-full  text-black shadow-lg  bg-red-600' onClick={() => changeColor('red')}>
            Red</button>
            <button className=' outline-none px-3 py-2 rounded-full  text-black shadow-lg bg-blue-600 'onClick={() => changeColor('Blue')}>
            Blue</button>
            <button className=' outline-none px-3 py-2 rounded-full  text-black shadow-lg  bg-green-600'onClick={() => changeColor('green')}>
            Green</button>
       </div>

    </div>
  </div>

  )
}

export default App
