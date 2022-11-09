import React from 'react'
import Padre from './Padre'

const Hijo = () => {
  return (
    <div>
        <Padre></Padre>
        <h2 className='text-center'>Yo soy el Hijo</h2>
    </div>
  )
}

export default Hijo;
