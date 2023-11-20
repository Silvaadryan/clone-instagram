import { useState } from 'react'
import LateralEsquerda from './componentes/Menulateralesquerdaitens/LateralEsquerda'
import Menuprincipal from './componentes/Teladomeio/Menuprincipal'
import LateralDireita from './componentes/Lateral_Direita/LateralDireita' 

import './App.css'

function App() {


  return (
    <>
      <main>
        <LateralEsquerda />
        
        <div className="conteudo_central">
          <Menuprincipal/>
        </div>

        <div className="lateral_direita"> 
          <LateralDireita/> 
        </div>


      </main>
    </>
  )
}

export default App
