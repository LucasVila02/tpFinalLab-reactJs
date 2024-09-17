import { useState, useEffect } from 'react';
import { create, update, remove, findAll } from '../services/EmpleadosServices';

const useAxiosEmpleados = () => {
  const [error, setError] = useState('');
  const [empleados, setEmpleados] = useState([]);
  const [empleadoSelected, setEmpleadoSelected] = useState({
    id: 0,
    name: '',
    puesto: '',
    departamento: '',
    email: '',
    telefono: '',
    nroDocumento: ''
  });

  useEffect(() => {
    const getEmpleados = async () => {
       const result = await findAll();
        setEmpleados(result.data);
    };
    getEmpleados();
  }, []);

  const handlerAddEmpleado = async (empleado) => {
    
      let response;
      if (empleado.id > 0) {
       
        response = await update(empleado);
        if (response.error) {
          setError(response.error);

          setTimeout(() => {
            setError('');
          }, 4000);

          return;
        }
        setEmpleados(empleados.map(e => e.id === response.data.id ? { ...response.data } : e));
        setError('')
      } else {
       
        response = await create(empleado);
        if (response.error) {
          setError(response.error);

          setTimeout(() => {
            setError('');
          }, 4000);

          return;
        }
        setEmpleados(empleados => [...empleados, response.data]);
        setError('')
      }
   
  };

  const handlerRemoveEmpleado = async (id) => {
      await remove(id);
      setEmpleados(empleados.filter(empleado => empleado.id !== id));
  };

  const handlerEmpleadoSelected = (empleado) => {
    setEmpleadoSelected({ ...empleado });
  };

  return {
    empleados,
    empleadoSelected,
    error,
    handlerAddEmpleado,
    handlerRemoveEmpleado,
    handlerEmpleadoSelected
  };
};

export default useAxiosEmpleados;