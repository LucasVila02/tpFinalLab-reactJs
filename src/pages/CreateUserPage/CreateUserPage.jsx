"use client";

import { useState } from "react";
import useAxiosUser from "../../hooks/useAxiosUsers";
import styles from './CreateUserPage.module.css';
import { Link } from "react-router-dom";

const initialDataForm = {
	name: '',
	email: '',
	password: '',
}

const CreateUserPage = () => {

	const [form, setForm] = useState(initialDataForm);
	const { name, email, password } = form;
	const {createUser, error} = useAxiosUser(); 

	const handlerSubmit = (e) => {
		e.preventDefault();
		createUser(form);
		setForm(initialDataForm);
	};
	return (
		<div className={styles.formContainer}>
		<h2>Crear nuevo usuario</h2>
		<form onSubmit={handlerSubmit}>
		  <div className={styles.formGroup}>
			<label htmlFor='name'>Nombre:</label>
			<input
			  placeholder='Name'
			  type='text'
			  name='name'
			  required
			  value={name}
			  onChange={(e) => setForm({
				...form,
				name: e.target.value
			  })}
			/>
		  </div>
  
		  <div className={styles.formGroup}>
			<label htmlFor='email'>Email:</label>
			<input
			  placeholder='Email'
			  name='email'
			  type='email'
			  required
			  value={email}
			  onChange={(e) => setForm({
				...form,
				email: e.target.value
			  })}
			/>
		  </div>
  
		  <div className={styles.formGroup}>
			<label htmlFor='password'>Password:</label>
			<input
			  placeholder='Password'
			  name='password'
			  type='password'
			  value={password}
			  required
			  onChange={(e) => setForm({
				...form,
				password: e.target.value
			  })}
			/>
		  </div>
  
		  <div>
			<button type='submit'>
			  Create
			</button>
		  </div>
		
		</form>
		<Link to={'/'}>Tienes cuenta? Inicia Sesión</Link>
		{error && <p className={styles.error}>{error}</p>}

	  </div>
	);
  };

CreateUserPage.propTypes = {};

export default CreateUserPage;