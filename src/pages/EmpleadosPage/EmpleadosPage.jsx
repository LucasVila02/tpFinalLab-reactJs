"use client";
import { useState, useEffect } from 'react';
import { create, findAll, remove, update } from '../../services/EmpleadosServices';
import EmpleadoForm from '../../components/EmpleadoForm/EmpleadoForm';
import EmpleadosGrid from '../../components/EmpleadosGrid/EmpleadosGrid';


const EmpleadosPage = () => {


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
		if(empleado.id > 0){
		  const response = await update(empleado)
		  setEmpleados(empleados.map(e => {
			if(e.id === response.data.id){
			  return {...response.data}
			}
			return e;
		  }));
		}else{
		  const response = await create(empleado)
		  setEmpleados(empleados => [...empleados, response.data]);
		}
	  } 
	  
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