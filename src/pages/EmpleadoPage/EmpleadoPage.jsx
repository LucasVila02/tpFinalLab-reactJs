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
		<div className={styles.card}>
      <h2>Detalles del Empleado</h2>
      <p><strong>Nombre:</strong> {empleado.name}</p>
      <p><strong>Puesto:</strong> {empleado.puesto}</p>
      <p><strong>Departamento:</strong> {empleado.departamento}</p>
      <p><strong>Email:</strong> {empleado.email}</p>
      <p><strong>Teléfono:</strong> {empleado.telefono}</p>
      <p><strong>Número de Documento:</strong> {empleado.nroDocumento}</p>
      <Link to="/empleados" className={styles.backLink}>Volver a la lista de empleados</Link>
    </div>
	);
};

EmpleadoPage.propTypes = {};

export default EmpleadoPage;