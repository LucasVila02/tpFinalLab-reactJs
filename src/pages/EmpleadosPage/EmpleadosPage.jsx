"use client";
import { useState, useEffect } from 'react';
import { create, findAll, remove, update } from '../../services/EmpleadosServices';
import EmpleadoForm from '../../components/EmpleadoForm/EmpleadoForm';
import EmpleadosGrid from '../../components/EmpleadosGrid/EmpleadosGrid';


const EmpleadosPage = () => {

	const [error, setError] = useState('')
	const [empleados, setEmpleados] = useState([]);
	const[empleadoSelected, setEmpleadoSelected] = useState({
	  id: 0,
	  name: '',
	  puesto: '',
	  departamento: '',
	  email: '',
	  telefono: '',
	  nroDocumento: ''
	})
	
	const getEmpleados = async ( ) => {
		const result = await findAll();
		setEmpleados(result.data);
	  }
	
	useEffect(() => {

		getEmpleados()
	}, [])
	const handlerAddEmpleado = async (empleado) => {
		let response;
	  
		if (empleado.id > 0) {
		  // Actualizar empleado
		  response = await update(empleado);
		  if (response.error) {
			setError(response.error); // Mostrar error en la UI
			return;
		  }
		  setEmpleados(empleados.map(e => {
			if (e.id === response.data.id) {
			  return { ...response.data };
			}
			return e;
		  }));
		} else {
		  // Crear nuevo empleado
		  response = await create(empleado);
		  if (response.error) {
			setError(response.error); // Mostrar error en la UI
			return;
		  }
		  setEmpleados(empleados => [...empleados, response.data]);
		}
	  };

	  
	  const handlerRemoveEmpleado = (id) => {
		console.log("ID a eliminar:", id);  // Verifica que este ID sea correcto
		remove(id);
		setEmpleados(empleados.filter(empleado => empleado.id !== id));
	  };
	
	  const handlerEmpleadoSelected = (empleado) =>{
	
		setEmpleadoSelected({...empleado});
	  }

	  
	

	return (

		<>
			<div className='container my-4'>
				<h1>Empleados</h1>
				<div className='row' >
					<div className='col'>
						<EmpleadoForm
							empleadoSelected={empleadoSelected}
							handlerAdd={handlerAddEmpleado}
						/>
						{error && <p style={{ color: 'red' }}>{error}</p>}
					</div>

					<div className='col'>
						{empleados.length > 0 ? 
						<EmpleadosGrid
							handlerEmpleadoSelected={handlerEmpleadoSelected}
							handlerRemoveEmpleado={handlerRemoveEmpleado}
							empleados={empleados} />
							: <div className='alert alert-warning'>No hay empleados en el sistema</div> 
							 }

					</div>
				</div>
			</div>
			
		</>


	);
};

EmpleadosPage.propTypes = {};

export default EmpleadosPage;