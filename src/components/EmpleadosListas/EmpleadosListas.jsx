"use client";
import { useNavigate } from 'react-router-dom';

const EmpleadosListas = ({handlerEmpleadoSelected, handlerRemoveEmpleado, empleado = []}) => {

  const navigate = useNavigate()

  const handlerMoreInfo = () => {
    navigate(`/empleado/${empleado.id}`)
  }

	return (
		<tr >
      <td>{empleado.name}</td>
      <td>{empleado.puesto}</td>
      <td>{empleado.email}</td>
      <td>
        <button className='btn btn-secondary btn-sm' onClick={handlerMoreInfo} >
            +Info
        </button>
      </td>
      <td>
        <button className='btn btn-secondary btn-sm' onClick={( ) => handlerEmpleadoSelected(empleado)}>
            Update
        </button>
      </td>
      <td>
        <button className='btn btn-danger btn-sm' onClick={() => handlerRemoveEmpleado(empleado.id)}>
          Delete
        </button>
      </td>
    </tr>
	);
};

EmpleadosListas.propTypes = {};

export default EmpleadosListas;