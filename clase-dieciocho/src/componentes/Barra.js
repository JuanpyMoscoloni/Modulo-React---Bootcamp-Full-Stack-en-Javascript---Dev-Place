import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Shoes from './Store/shoes';
import Gorras from './Store/hats';
import Tshirts from './Store/tshirts';
import Nieto from './Nieto';
import Carrusel from './carrousel'

function BarraNavegacion() {
  return (
    <>
    <Tabs
      defaultActiveKey="shoes"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="shoes" title="Shoes">
      <Shoes />
      </Tab>
      <Tab eventKey="hats" title="Hats">
       <Gorras />
      </Tab>  
      <Tab eventKey="tshirts" title="T-Shirts">
      <Tshirts />
      </Tab>
      <Tab eventKey="profile" title="Punto 2">
       <Nieto />
      </Tab> 
      <Tab eventKey="carrusel" title="Carrousel">
       <Carrusel />
      </Tab> 
      
    </Tabs>
    </>
  );
}

export default BarraNavegacion;
