import "./componentes/app.css";
import Appbar from "./componentes/Nav/Appbar";
import HomePage from "./componentes/HomePage";
import Footer from "./componentes/Footer/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RegisterPage from "./componentes/RegisterPage";
import SignInPage from "./componentes/SignInPage";
import { Compartir } from "./componentes/Sharecito/Share";
import ProductosPage from "./componentes/ProductosPage";

function App() {
  return (
    <>
      <Appbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/productos" element={<ProductosPage/>} />
        </Routes>
      </BrowserRouter>
      <Compartir/>
      <Footer />
    </>
  );
}

export default App;
