"use client";

import { useState } from 'react';
import EmpleadosListas from '../EmpleadosListas/EmpleadosListas';

const EmpleadosGrid = ({ handlerEmpleadoSelected, handlerRemoveEmpleado, empleados = [] }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredEmpleados = empleados.filter((empleado) => {
    const searchLower = searchTerm.toLowerCase();
    return (
      empleado.name.toLowerCase().includes(searchLower) ||
      empleado.puesto.toLowerCase().includes(searchLower) ||
      empleado.email.toLowerCase().includes(searchLower)
    );
  });

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>

      <input
        type="text"
        className="form-control mb-3"
        placeholder="Buscar empleado por nombre, puesto o email"
        value={searchTerm}
        onChange={handleSearchChange}
      />


      <table className="table table-hover table-striped">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Puesto</th>
            <th>Email</th>
            <th>+Info</th>
            <th>Actualizar</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {filteredEmpleados.length > 0 ? (
            filteredEmpleados.map((empleado) => (
              <EmpleadosListas
                handlerEmpleadoSelected={handlerEmpleadoSelected}
                handlerRemoveEmpleado={handlerRemoveEmpleado}
                key={empleado.id}
                empleado={empleado}
              />
            ))
          ) : (
            <tr>
              <td colSpan="6" className="text-center">
                No se encontraron empleados.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default EmpleadosGrid;