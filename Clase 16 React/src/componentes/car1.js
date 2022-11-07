import React from 'react'

 function Car1() {
    return <h2>Soy un Auto en Funcion</h2>;
  }
 function Garage() {
    return (
        <>
        <h1>Quién sos vos?</h1>
        <Car1 />
        </>
    );
  }

  export function Mostrar(){
    return(<>
    <Garage />
    
    </>)
  }
