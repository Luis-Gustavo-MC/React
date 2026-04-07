import React from 'react'

const CarDetails = ({brand,km,color}) => {
  return (
    <div>
        <h2>Detalhes do carro:</h2>
        <div className='list'>
            <ul>
                <li>Marca: {brand}</li>
                <li>Kilomretragem: {km}</li>
                <li>Cor: {color}</li>
            </ul>
        </div>
    </div>
  )
}
export default CarDetails