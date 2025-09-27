import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import Chai from './chai'

/*Here we create component that will used to render on the frontend or user can see it the ui like make footer component and then import on main.jsx and then render to the index.html */

function App() {
  const userName = "Jaswant yadav";
  return (
    // <></> is fragment that help to group the multiple element without adding extra node to the dom// without it you can not return multiple element from the function component
    <>
    <Chai/>
    <h1>Hello {userName} Welcome to web </h1>
    <h2>Here we making the UI </h2>
    <h2>After App content you hava see your chai component funcitonality </h2>

    </>
  )
}

export default App
