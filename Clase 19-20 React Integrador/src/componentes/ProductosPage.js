
import "@fortawesome/fontawesome-free/css/all.min.css";
import '@fortawesome/react-fontawesome';
import "bootstrap-css-only/css/bootstrap.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "mdbreact/dist/css/mdb.css";
import BotonFiltro from "./Productos/BotonFiltro";
import CardsProductos from "./Productos/CardsProductos";
import { Titulo } from "./Titulos/Titulo";

function ProductosPage({ productItems, handleAddProduct}) {
  return (
    <>
        <Titulo />
        <BotonFiltro/>
        <CardsProductos productItems={productItems} handleAddProduct={handleAddProduct} />
        
    </>
  );
}

export default ProductosPage;
