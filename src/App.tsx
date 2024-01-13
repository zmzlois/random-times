import React, { useState } from 'react'

import './App.css'
import TopNav from './components/top-nav'
import Header from './components/header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <div className="min-w-screen min-h-screen py-5 ">
        <div className="mx-auto container">
          <TopNav/>
          <Header/>
          </div>
      </div>
    </>
  )
}

export default App
