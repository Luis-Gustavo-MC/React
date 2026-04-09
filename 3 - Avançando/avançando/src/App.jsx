import { Children, useState } from 'react'
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
// 7 - Render Condicional
import ConditionalRender from './components/ConditionalRender'
// 8 - props
import ShowUserName from './components/ShowUserName'
// 9 - Destruturando Props
import CarDetails from './components/CarDetails'
// 11 - renderização de componentes
  const cars = [
    {id:1, brand: "Ferrari" , color: "Vermelho" , km:0},
    {id:2, brand:"Kia" , color: "Branco" , km:80000},
    {id:3, brand:"Renault" , color: "Azul" , km:20000}
  ]
// 12 - fragments
import Fragments from './components/fragments'
// 13 - children
import Container from './components/container'
// 14 - Função em prop
import ExecuteFunction from './components/ExecuteFunction'
// 15 - state lift
import Message from './components/Message'

import ChangeMessage from './components/ChangeMessage'

function App() {
  const [count, setCount] = useState(0)
  // 14 - Função em prop
  function showMensage(){
    console.log("teste")
  }
  // 15 - state lift
  const [mensage,setMensage] = useState("")

  const handleMensage = (msg) =>{
    setMensage(msg)
  }

  return (
    <>
        <h1>Avançando em React</h1>
        {/* 1 - Imagem em public */}
        {/* <img src="/street.jpg" alt="Street"/> */}
        {/* 2 - Imagem em assets */}
        {/* <img src={night} alt="Night"/> */}
        {/* 3 -useState */}
        <Data />
        {/* 4 - Renderização de lista */}
        <ListRender />
        {/* 7 - Render Condicional */}
        <ConditionalRender />
        {/* 8 - Props */}
        <ShowUserName name="Luis"/>
        {/* 9 - Destruturando Props*/}
        <CarDetails brand={"VW"} km={999} color={"Vermelho"}/>
        {/* 10 - Reaproveitamento de componentes */}
        <CarDetails brand={"Fiat"} km={12345} color={"Branco"}/>
        <CarDetails brand={"Audi"} km={3215} color={"Azul"}/>
        {/* 11 - renderização de listas de componentes */}
        {cars.map((car)=>(
          <CarDetails key={car.id} km={car.km} brand={car.brand} color = {car.color}/>
        ))}
        {/* 12 - fragment */}
        <Fragments/>
        {/* 13 - container */}
        <Container>
          <p>Alguma coisa</p>
        </Container>
        {/* 14 - Função em prop*/}
        <ExecuteFunction myFunction={showMensage}/>
        {/*  15 - state lift */}
        <Message msg={mensage}/>
        <ChangeMessage handleMessage={handleMensage}/>
    </>
  )
}
export default App
