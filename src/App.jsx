import React from 'react'
import './App.css'
import Header from './containers/Header'
import Meme from './containers/Meme'

function App() {

  console.log(React.useState("hello"))
  return (
    <div>
      <Header />
      <Meme />
    </div>
  )
}

export default App
