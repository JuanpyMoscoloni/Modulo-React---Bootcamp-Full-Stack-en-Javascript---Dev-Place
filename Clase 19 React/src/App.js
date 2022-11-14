import "./App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import Appbar from "./componentes/Nav/Appbar";
import HomePage from "./componentes/HomePage";
import Footer from "./componentes/Footer/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RegisterPage from "./componentes/RegisterPage";
import SignInPage from "./componentes/SignInPage";

function App() {
  return (
    <>
      <Appbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/signin" element={<SignInPage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
