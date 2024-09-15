"use client";

import EmpleadosListas from '../EmpleadosListas/EmpleadosListas';

const EmpleadosGrid = ({handlerEmpleadoSelected, handlerRemoveEmpleado, empleados = []}) => {
	return (
		<table className='table table-hover table-striped'>
        <thead>
          <tr>
            
            <th>Name</th>
            <th>Puesto</th>
            <th>Email</th>
            <th>+Info</th>
            <th>Update</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {empleados.map(empleado => {
            return <EmpleadosListas handlerEmpleadoSelected={handlerEmpleadoSelected} handlerRemoveEmpleado={handlerRemoveEmpleado}  key={empleado.id}  empleado={empleado}/>
          })}

        </tbody>
      </table>
	);
};

EmpleadosGrid.propTypes = {};

export default EmpleadosGrid;