"use client";
import { Link, useParams } from 'react-router-dom';
import styles from './EmpleadoPage.module.css';
import { findById } from '../../services/EmpleadosServices';
import { useEffect, useState } from 'react';
const EmpleadoPage = () => {

	const {id} = useParams()
	
	const [empleado, setEmpleado] = useState([]);
	
	const getEmpleado = async () =>{
		const result = await findById(id)
		setEmpleado(result.data)
	}
	useEffect(() => {
	
		getEmpleado()
	}, [])

	return (
		<div className={styles.empleadopage}>
 			<br />{empleado.name}
			 <br />{empleado.puesto}
			 <br />{empleado.departamento}
			 <br />{empleado.email}
			 <br />{empleado.telefono}
			 <br />{empleado.nroDocumento}
			 <br /> <Link to={'/empleados'}>Volver</Link>
 		</div>
	);
};

EmpleadoPage.propTypes = {};

export default EmpleadoPage;