import React from 'react'

const container = ({children}) => {
  return (
    <div>
        <h1>Conteudo do componente pai:</h1>
        {children}
    </div>
  )
}

export default container