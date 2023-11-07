import { useState } from 'react'
import "./index.css"
import img from "./john.jpg"
import Configuracion_Perfill from './configuracion_Perfill'


function App() {

  return (
    <>
      <div>
        <h1>inicia seccion</h1>
        <img src={img} alt="" />
        <Configuracion_Perfill />

      </div>
    </>
  )
}

export default App
