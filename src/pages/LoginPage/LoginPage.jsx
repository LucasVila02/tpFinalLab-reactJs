"use client";
import { useState } from 'react';
import styles from './LoginPage.module.css';
import {  useForm } from '../../hooks';
import { Navigate, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/LoginContext';


const LoginPage = () => {
	const [error, setError] = useState("");
	const naviate = useNavigate();
	const { onLogin, loading, isLogged } = useAuth();

	
	const submitForm = async(e) => {
		await onLogin()
		naviate('./home')
	}
	const { values,handleChange, handleSubmit} = useForm({email: "", password: ""}, submitForm);
	
	if(isLogged){
		return <Navigate to='/home'/>
	}


	return (
		<>
			{loading ? (

				<div className={styles.loading}> Loading...</div>

				):(

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
					{/* <button type='submit'>Crear Usuario</button> */}
					{error && <div className={styles.error}> {error}</div>}
				</div>
				)
			}
		</>
	);
};

LoginPage.propTypes = {};

export default LoginPage;