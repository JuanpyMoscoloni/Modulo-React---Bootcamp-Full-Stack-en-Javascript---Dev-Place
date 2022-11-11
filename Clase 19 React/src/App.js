import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Carrusel from './componentes/Calesita/Carrusel';
import Appbar from './componentes/Nav/Appbar';
import Cards from './componentes/Cartas/Cards';
import { Titulo } from './componentes/Titulos/Titulo';
import Footer from './componentes/Footer/Footer';

function App() {
  return (
    <>
    <Appbar/>
    <Carrusel/>
    <Titulo/>
    <Cards/>
    <Footer/>
    </>
  );
}

export default App;
