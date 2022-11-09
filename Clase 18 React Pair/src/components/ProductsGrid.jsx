import React, { useContext } from "react";
import Card from "./Card";
import "../styles/products.css";
import { ProductsContext } from "../App";
import { useState } from "react";

function ProductsGrid() {
  let products = useContext(ProductsContext);
  const [selectedProducts, setSelectedProducts] = useState(products);

  function filterProducts(e) {
    let cat = e.target.textContent;

    let arrayFiltrado = products.filter((obj) => {
      return obj.type === cat;
    });
    setSelectedProducts(arrayFiltrado);
  }

  return (
    <>
      <div className="container-buttons">
        <button onClick={filterProducts} className="botones">Skates</button>
        <button onClick={filterProducts} className="botones">Longboards</button>
        <button onClick={filterProducts} className="botones">Tablas de Surf</button>
        <button
          onClick={() => {
            setSelectedProducts(products);
          }} className="botones"
        >
          Todos
        </button>
      </div>
      <div className="products-container">
        {selectedProducts.map((obj, idx) => {
          return <Card obj={obj} key={idx} />;
        })}
      </div>
    </>
  );
}

export default ProductsGrid;