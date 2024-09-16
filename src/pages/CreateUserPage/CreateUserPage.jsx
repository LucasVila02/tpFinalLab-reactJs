"use client";

import { useState } from "react";
import useAxiosUser from "../../hooks/useAxiosUsers";
// import styles from './CreateUserPage.module.css';

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

		<>
			<form onSubmit={handlerSubmit} action="">

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

			</form>
			{error && <p style={{ color: 'red' }}>{error}</p>}
		</>

	);
};

CreateUserPage.propTypes = {};

export default CreateUserPage;