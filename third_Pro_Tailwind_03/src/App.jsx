import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import OneFile from './components/OneFile'

import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <div className="bg-green-400 text-3xl p-5 text-black mb-4 rounded-xl font-bold underline">
      Hello world!
    </div> */}
    <div className="text-center mt-12 font-sans">
      <h1 className="text-3xl font-bold text-gray-800">
        Welcome to My React Vite App 🚀
      </h1>
      <p className="text-lg text-gray-600 mt-2">
        This is a simple UI project using Tailwind CSS.
      </p>
      <OneFile />
    </div>
    {/* <Card /> */}
    </>
  )
}

export default App
