import "./componentes/app.css";
import Appbar from "./componentes/Nav/Appbar";
import HomePage from "./componentes/HomePage";
import Footer from "./componentes/Footer/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RegisterPage from "./componentes/RegisterPage";
import SignInPage from "./componentes/SignInPage";
import { Compartir } from "./componentes/Sharecito/Share";
import ProductosPage from "./componentes/ProductosPage";
import CartPage from "./componentes/CartPage";
import { IPhone } from "./componentes/PaginasFiltro/iPhone";
import { IPad } from "./componentes/PaginasFiltro/iPad";
import { IWatch } from "./componentes/PaginasFiltro/iWatch";
import { useState } from "react";
import cartas from './componentes/data/data';

const App = () => {

  const productItems = cartas;
  const [cartItems, setCartItems] = useState([]);

  const handleAddProduct = (product) => {
    const ProductExist = cartItems.find((item) => item.id === product.id);
    if (ProductExist) {
      setCartItems(
        cartItems.map((item) => item.id === product.id
          ? { ...ProductExist, quantity: ProductExist.quantity + 1 }
          : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };
  return (
    <>
      <Appbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/productos" element={<ProductosPage productItems={productItems} handleAddProduct={handleAddProduct} />} />
          <Route path="/iphone" element={<IPhone />} />
          <Route path="/ipad" element={<IPad />} />
          <Route path="/iwatch" element={<IWatch />} />
          <Route path="/cart" element={<CartPage cartItems={cartItems} handleAddProduct={handleAddProduct} />} />
        </Routes>
      </BrowserRouter>
      <Compartir />
      <Footer />
    </>
  );
}

export default App;
