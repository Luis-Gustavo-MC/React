import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
//  2 - Imagem em assets
import night from './assets/night.jpg'
// 3- UseState
import Data from './components/Data'
// 4 - Renderização de lista
import ListRender from './components/ListRender'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <h1>Avançando em React</h1>
        {/* 1 - Imagem em public */}
        <img src="/street.jpg" alt="Street"/>
        {/* 2 - Imagem em assets */}
        <img src={night} alt="Night"/>
        {/* 3 -useState */}
        <Data />
        {/* Renderização de lista */}
        <ListRender />
    </>
  )
}
export default App
