import { useState } from 'react'

function App() {
  const [color, setColor] = useState('bg-blue-800')

  return (
    <>
     <div className='w-full h-screen duration-200 ' style={{backgroundColor:color}}>
      <div className='text-3xl font-bold mb-5 p-5'>Change Background Color</div>
      <div className='flex gap-5'>
        <button className='bg-red-500 text-white px-4 py-2 rounded border-2 hover:bg-red-600' onClick={() => {
         setColor('red');
        }}>Red</button>
        <button className='bg-blue-500 text-white px-4 py-2 rounded border-2 hover:bg-blue-600' onClick={() => {
          setColor('blue');
        }}>Blue</button>
        <button className='bg-green-500 text-white px-4 py-2 rounded border-2 hover:bg-green-600' onClick={() => {
         setColor('green');
        }}>Green</button>
        <button className='bg-yellow-500 text-white px-4 py-2 rounded border-2 hover:bg-yellow-600' onClick={() => {
         setColor('yellow');
        }}>Green</button>
        <button className='bg-olive-500 text-white px-4 py-2 rounded border-2 hover:bg-white-600' onClick={() => {
         setColor('olive');
        }}>Green</button>
      </div>
     </div>
    </>
  )
}

export default App
