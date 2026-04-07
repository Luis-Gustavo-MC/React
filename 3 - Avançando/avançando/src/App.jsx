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
// 7 - Render Condicional
import ConditionalRender from './components/ConditionalRender'
// 8 - props
import ShowUserName from './components/ShowUserName'
// 9 - Destruturando Props
import CarDetails from './components/CarDetails'

  const cars = [
    {id:1, brand: "Ferrari" , color: "Vermelho" , km:0},
    {id:2, brand:"Kia" , color: "Branco" , km:80000},
    {id:3, brand:"Renault" , color: "Azul" , km:20000}
  ]


function App() {
  const [count, setCount] = useState(0)

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
    </>
  )
}
export default App
