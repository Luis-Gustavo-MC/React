import React from 'react'

const events = () => {

  const handleClick = () => {
    console.log("Executou!")
  }
  const renderSomething = (x)=>{
      if(x){
        return <h1>Renderizar isso!</h1>
      }
      else{
        return <h1>Renderizando outras coisas</h1>
      }
  }
  
  return (
    <div>
      <div>
        <button onClick={() => console.log("Hello Word!")}>Clique Aqui!</button>
      </div>
      <div>
        <button onClick={handleClick}>Clique Aqui - com função</button>
      </div>
      {/* Função render */}
      {renderSomething(false)}
      {renderSomething(true)}
    </div>
  )
}

export default events
