import { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import PropTypes from 'prop-types';


const Proveedor = ({ supabase }) => {
    const [proveedores, setProveedores] = useState([]);
  
    useEffect(() => {
      
      async function fetchProveedores() {
        try {
          let { data: proveedores, error } = await supabase
            .from('proveedor')
            .select('*');
  
          if (error) {
            throw error;
          }
  
          setProveedores(proveedores);
        } catch (error) {
          console.error('Error fetching tasks:', error.message);
        }
      }

      fetchProveedores();
    }, [supabase]);

  return (
    <div>
      <h2>Proveedores</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Dirección</th>
            <th>Email</th>
            <th>Teléfono</th>
          </tr>
        </thead>
        <tbody>
          {proveedores.map((proveedor) => (
            <tr key={proveedor.id_prov}>
              <td>{proveedor.id_prov}</td>
              <td>{proveedor.nombre_prov}</td>
              <td>{proveedor.descrip_prov}</td>
              <td>{proveedor.dir_prov}</td>
              <td>{proveedor.email_prov}</td>
              <td>{proveedor.tlfn_prov}</td>
            </tr>
            
          ))}
        </tbody>
      </Table>
    </div>
  );
};

Proveedor.propTypes = {
    supabase: PropTypes.object.isRequired,
  };
  
export default Proveedor;
