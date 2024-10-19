import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import User from './user'

function App() {
 
  return (
    <div className='App'>
      <User data={{name:"John Doe", age: 26}}/>
    </div>
  )
}

export default App
