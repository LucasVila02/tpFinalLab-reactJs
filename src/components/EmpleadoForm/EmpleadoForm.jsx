"use client";
import { useEffect, useState } from 'react';

const initialDataForm = {
	id: 0,
	name: '',
	puesto: '',
	departamento: '',
	email: '',
	telefono: '',
	nroDocumento: ''
}


const EmpleadoForm = ({ empleadoSelected, handlerAdd }) => {

	const [form, setForm] = useState(initialDataForm);
	const { id, name,puesto, departamento, email, telefono, nroDocumento } = form;

	useEffect(() => {
		if (empleadoSelected) {
			setForm(empleadoSelected);
			
		  }
	}, [empleadoSelected])

	const handleSubmit = async (e) => {
		e.preventDefault();
		await handlerAdd(form);
		  setForm(initialDataForm);

	  };

	return (
		//REVISAR CODIGO
		<form onSubmit={handleSubmit} action="">

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
			<label htmlFor='puesto' >Puesto: </label>
				<input
					className='form-control my-3 w-75'
					placeholder='Puesto'
					name='puesto'
					type='text'
					required
					value={puesto}
					onChange={(e) => setForm({
						...form,
						puesto: e.target.value
					})}
				>
				</input>

			</div>
			<div>
			<label htmlFor='departamento' >Departamento: </label>
				<input
					className='form-control my-3 w-75'
					placeholder='Departamento'
					name='departamento'
					type='text'
					required
					value={departamento}
					onChange={(e) => setForm({
						...form,
						departamento: e.target.value
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
			<label htmlFor='telefono' >Telefono: </label>
				<input
					className='form-control my-3 w-75'
					placeholder='Telefono'
					name='telefono'
					type='number'
					value={telefono}
					required
					onChange={(e) => setForm({
						...form,
						telefono: e.target.value
					})}
				>
				</input>
			</div>
			

			<div>
			<label htmlFor='nroDocumento' >Nro. Documento: </label>
			<input
				className='form-control my-3 w-75'
				placeholder='nroDocumento'
				name='nroDocumento'
				type='number'
				required
				value={nroDocumento}
				onChange={(e) => setForm({
					...form,
					nroDocumento: e.target.value
				})}
			>
			</input>
			</div>
			<div>
				<button type='submit' className='btn btn-primary'>
					{id > 0 ? "Update" : "Create"}
				</button>

			</div>
		</form>
	);
};

EmpleadoForm.propTypes = {};

export default EmpleadoForm;