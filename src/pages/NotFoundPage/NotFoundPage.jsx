"use client";

import { Navigate, useNavigate } from 'react-router-dom';
import styles from './NotFoundPage.module.css';


const NotFoundPage = () => {

	const navigate = useNavigate();

	const handleReturn = () => {
		navigate("/home")
	}

	return (
		<div className={styles.notfoundpage}>
 			<h1>Error: 404</h1>
			<p>Pagina no encontrada!</p>
			<button onClick={handleReturn}>volver</button>
 		</div>
	);
};

NotFoundPage.propTypes = {};

export default NotFoundPage;