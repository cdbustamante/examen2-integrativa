import { useState } from 'react';

import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import Proveedor from './proveedor';


import { BsSearch } from 'react-icons/bs';
import { saveAs } from 'file-saver';

import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_REACT_APP_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_REACT_APP_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);


const App = () =>  {
  const [tablaSeleccionada, setTablaSeleccionada] = useState('proveedor');

  const handleTablaClick = (tabla) => {
    setTablaSeleccionada(tabla);
  };

  return (
    <div className="d-flex justify-content-center align-items-center flex-column">
      <h1 className="text-center">Sistema de Inventario</h1>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link onClick={() => handleTablaClick('proveedor')}>
              Proveedores
            </Nav.Link>
            <Nav.Link onClick={() => handleTablaClick('producto')}>
              Productos
            </Nav.Link>
            <Nav.Link onClick={() => handleTablaClick('movimiento')}>
              Movimientos
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="container mt-5">
        {tablaSeleccionada === 'proveedor' && <Proveedor supabase={supabase} />}
        {tablaSeleccionada === 'producto' && <div>Aquí irá el contenido de Producto</div>}
        {tablaSeleccionada === 'movimiento' && <div>Aquí irá el contenido de Movimiento </div>}
      </div>
    </div>
  );
};

export default App;
