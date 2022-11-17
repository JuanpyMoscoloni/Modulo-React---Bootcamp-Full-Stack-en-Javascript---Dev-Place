
import "@fortawesome/fontawesome-free/css/all.min.css";
import '@fortawesome/react-fontawesome';
import "bootstrap-css-only/css/bootstrap.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "mdbreact/dist/css/mdb.css";
import BotonFiltro from "./Productos/BotonFiltro";
import Cart from './Cart/Cart'
import { Titulo } from "./Titulos/Titulo";

export function CartPage({ cartItems, handleAddProduct}) {
  return (
    <>
        <Titulo />
        <BotonFiltro/>
        <Cart cartItems={cartItems} handleAddProduct={handleAddProduct}/>
        
    </>
  );
}

export default CartPage;
