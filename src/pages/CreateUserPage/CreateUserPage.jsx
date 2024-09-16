"use client";

import { useState } from "react";
import { create, findAll } from "../../services/LoginServices";
import { useNavigate } from "react-router-dom";

// import styles from './CreateUserPage.module.css';

const initialDataForm = {
	name: '',
	email: '',
	password: '',
}


const CreateUserPage = () => {

	const [user, setUser] = useState([]);
	const [form, setForm] = useState(initialDataForm);
	const [error, setError] = useState('');
	const navigate = useNavigate();  // Inicializa navigate

	const { name, email, password } = form;

	// Función para verificar si el email ya existe
	const isEmailUnique = async (email) => {
		const response = await findAll(); // Obtiene todos los usuarios
		const usuarios = response;

		// Verifica si hay algún usuario con el mismo email
		return usuarios.some((usuario) => usuario.email === email);
	};

	const createUser = async (form) => {
		try {
			// Verifica si el email ya existe
			const emailExiste = await isEmailUnique(form.email);

			if (emailExiste) {
				setError('Este email ya está en uso');
				return; // No continúa con la creación
			}

			// Si el email no está duplicado, crea el usuario
			const response = await create(form); // Envía el formulario al servicio
			setUser(user => [...user, response.data]); // Actualiza el estado con el nuevo usuario
			setError(''); // Resetea el error si lo hubiera
			navigate('/');  // Redirige a la página de inicio de sesión
		} catch (error) {
			console.error('Error al crear usuario:', error);
		}
	};

	const handlerCreateUser = (e) => {
		e.preventDefault();
		createUser(form);  // Pasar el 'form' a 'createUser'
		setForm(initialDataForm);  // Restablecer el formulario
	};
	return (
		<form onSubmit={handlerCreateUser} action="">

			<div>
				<label htmlFor='name' >Nombre: </label>
				<input
					className='form-control my-3 w-75'
					placeholder='Name'
					type='text'
					name='name'
					required
					value={name}
					onChange={(e) => setForm({
						...form,
						name: e.target.value
					})}
				>
				</input>
			</div>

			<div>
				<label htmlFor='email' >Email: </label>
				<input
					className='form-control my-3 w-75'
					placeholder='Email'
					name='email'
					type='email'
					required
					value={email}
					onChange={(e) => setForm({
						...form,
						email: e.target.value
					})}
				>
				</input>
			</div>

			<div>
				<label htmlFor='password' >Password: </label>
				<input
					className='form-control my-3 w-75'
					placeholder='Password'
					name='password'
					type='password'
					value={password}
					required
					onChange={(e) => setForm({
						...form,
						password: e.target.value
					})}
				>
				</input>
			</div>

			<div>
				<button type='submit' className='btn btn-primary'>
					Create
				</button>

			</div>
			{error && <p style={{ color: 'red' }}>{error}</p>} {/* Muestra el mensaje de error si existe */}

		</form>
	);
};

CreateUserPage.propTypes = {};

export default CreateUserPage;