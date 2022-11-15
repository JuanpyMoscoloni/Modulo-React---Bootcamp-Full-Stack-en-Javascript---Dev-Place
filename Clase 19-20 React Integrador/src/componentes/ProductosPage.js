
import "@fortawesome/fontawesome-free/css/all.min.css";
import '@fortawesome/react-fontawesome';
import "bootstrap-css-only/css/bootstrap.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "mdbreact/dist/css/mdb.css";
import Cards from "./Cartas/Cards";
import BotonFiltro from "./Productos/BotonFiltro";
import CardsProductos from "./Productos/CardsProductos";
import { Titulo } from "./Titulos/Titulo";

function ProductosPage() {
  return (
    <>
        <Titulo />
        <BotonFiltro/>
        <CardsProductos/>
        
    </>
  );
}

export default ProductosPage;
