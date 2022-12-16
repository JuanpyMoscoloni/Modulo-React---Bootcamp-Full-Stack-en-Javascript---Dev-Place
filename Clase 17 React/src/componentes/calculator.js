import React, { useState } from "react";

const Calculator = () => {
  // Declarar un estado para almacenar el valor actual del display de la calculadora
  const [displayValue, setDisplayValue] = useState("0");

  // Función para manejar el evento de clic en un número del teclado de la calculadora
  const handleNumberClick = (number) => {
    // Si el valor actual del display es "0", reemplazarlo por el número cliqueado
    if (displayValue === "0") {
      setDisplayValue(number);
    } else {
      // Si el valor actual del display no es "0", concatenar el número cliqueado al final del valor actual del display
      setDisplayValue(displayValue + number);
    }
  };

  // Función para manejar el evento de clic en el botón de borrado total del teclado de la calculadora
  const handleClearClick = () => {
    // Reemplazar el valor del display por "0"
    setDisplayValue("0");
  };

  // Función para manejar el evento de clic en un operador del teclado de la calculadora
  const handleOperatorClick = (operator) => {
    // TODO: implementar cálculos con operadores aquí
  };

  // Función para manejar el evento de clic en el botón
  const handleEqualsClick = () => {
    // TODO: implementar cálculos de resultado aquí
  };

  return (
    <>
      <div>
        <div>
          {/* Mostrar el valor actual del display de la calculadora */}
          <p>{displayValue}</p>
        </div>
        <div>
          {/* Mostrar los botones del teclado de la calculadora */}
          <button onClick={() => handleClearClick()}>AC</button>
          <button onClick={() => handleOperatorClick("/")}>/</button>
          <button onClick={() => handleOperatorClick("")}>*</button>
          <button onClick={() => handleNumberClick(7)}>7</button>
          <button onClick={() => handleNumberClick(8)}>8</button>
          <button onClick={() => handleNumberClick(9)}>9</button>
          <button onClick={() => handleOperatorClick("-")}>-</button>
          <button onClick={() => handleNumberClick(4)}>4</button>
          <button onClick={() => handleNumberClick(5)}>5</button>
          <button onClick={() => handleNumberClick(6)}>6</button>
          <button onClick={() => handleOperatorClick("+")}>+</button>
          <button onClick={() => handleNumberClick(1)}>1</button>
          <button onClick={() => handleNumberClick(2)}>2</button>
          <button onClick={() => handleNumberClick(3)}>3</button>
          <button onClick={() => handleEqualsClick()}>=</button>
          <button onClick={() => handleNumberClick(0)}>0</button>
          <button onClick={() => handleNumberClick(".")}>.</button>
        </div>
      </div>
    </>
  );
};

export default Calculator;
