"use client";
import { useState } from 'react';
import styles from './LoginPage.module.css';
import { useForm } from '../../hooks';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/LoginContext';
import { findAll } from '../../services/LoginServices';


const LoginPage = () => {
	const [error, setError] = useState("");
	const navigate = useNavigate();
	const { onLogin, loading, isLogged } = useAuth();

	const submitForm = async (e) => {
		try {
			const response = await findAll(); // Servicio que obtiene todos los usuarios
			const usuarios = response;

			// Busca el usuario que coincida con el email
			const usuarioEncontrado = usuarios.find(user => user.email === values.email);

			if (!usuarioEncontrado) {
				setError('El email no está registrado.');
				return;
			}

			// Valida la contraseña
			if (usuarioEncontrado.password !== values.password) {
				setError('Contraseña incorrecta.');
				return;
			}
			await onLogin(); // Función de autenticación
			navigate('/home');
		} catch (error) {
			console.error('Error al iniciar sesión:', error);
			setError('Hubo un error al intentar iniciar sesión.');
		}
	}
	const { values, handleChange, handleSubmit } = useForm({ email: "", password: "" }, submitForm);

	if (isLogged) {
		return <Navigate to='/home' />
	}


	return (
		<>
			{loading ? (

				<div className={styles.loading}> Loading...</div>

			) : (

				<div className={styles.loginPage}>
					<h1>
						Bienvenido a EmpleaPro!
					</h1>
					<form onSubmit={handleSubmit}>
						<div className={styles.formGroup}>
							<label htmlFor='email'>Email: </label>
							<input type="email" name="email" id="email" required value={values.email} onChange={handleChange} />
						</div>

						<div className={styles.formGroup}>
							<label htmlFor='password'>Password: </label>
							<input type="password" name="password" id="password" required value={values.password} onChange={handleChange} />
						</div>

						<button type='submit'>Login</button>
					</form>
					<Link to={'/create-user'} type='submit'>No tienes una cuenta? Crea un Usuario</Link>
					{error && <div className={styles.error}> {error}</div>}
				</div>
			)
			}
		</>
	);
};

LoginPage.propTypes = {};

export default LoginPage;