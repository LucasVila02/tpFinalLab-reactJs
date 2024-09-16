"use client";
import { useEffect} from 'react';
import { useForm } from '../../hooks';

const EmpleadoForm = ({ empleadoSelected, handlerAdd }) => {

	const submitForm = async () => {
		await handlerAdd(values);
		setValues({
			id: "",
			name: "",
			puesto: "",
			departamento: "",
			email: "",
			telefono: "",
			nroDocumento: ""
		});
		
	  };

	const { values, handlerChange, handlerSubmit, setValues, errors } = useForm({ 
		id: "", 
		name: "",
		puesto: "", 
		departamento: "", 
		email: "", 
		telefono: "", 
		nroDocumento: ""
	}, submitForm);

	useEffect(() => {
		if (empleadoSelected) {
			setValues(empleadoSelected);
		  }
	}, [empleadoSelected])


	return (
		//REVISAR CODIGO
		<form onSubmit={handlerSubmit} action="">

			<div>
				<label htmlFor='name' >Nombre: </label>
				<input
					
					className='form-control my-3 w-75'
					placeholder='Name'
					type='text'
					name='name'
					required
					value={values.name}
					onChange={handlerChange}
				/>
				  {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
			</div>
			
			<div>
			<label htmlFor='puesto' >Puesto: </label>
				<input
					className='form-control my-3 w-75'
					placeholder='Puesto'
					name='puesto'
					type='text'
					required
					value={values.puesto}
					onChange={handlerChange}
				/>
				 {errors.puesto && <p style={{ color: 'red' }}>{errors.puesto}</p>}

			</div>
			<div>
			<label htmlFor='departamento' >Departamento: </label>
				<input
					className='form-control my-3 w-75'
					placeholder='Departamento'
					name='departamento'
					type='text'
					required
					value={values.departamento}
					onChange={handlerChange}
				/>
				 {errors.departamento && <p style={{ color: 'red' }}>{errors.departamento}</p>}

			</div>
			<div>
			<label htmlFor='email' >Email: </label>
				<input
					className='form-control my-3 w-75'
					placeholder='Email'
					name='email'
					type='email'
					required
					value={values.email}
					onChange={handlerChange}
				/>
				{errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}

			</div>
			<div>
			<label htmlFor='telefono' >Telefono: </label>
				<input
					className='form-control my-3 w-75'
					placeholder='Telefono'
					name='telefono'
					type='number'
					value={values.telefono}
					required
					onChange={handlerChange}
				/>
				{errors.telefono && <p style={{ color: 'red' }}>{errors.telefono}</p>}
			</div>
			

			<div>
			<label htmlFor='nroDocumento' >Nro. Documento: </label>
			<input
				className='form-control my-3 w-75'
				placeholder='nroDocumento'
				name='nroDocumento'
				type='number'
				required
				value={values.nroDocumento}
				onChange={handlerChange}
			/>
			{errors.nroDocumento && <p style={{ color: 'red' }}>{errors.nroDocumento}</p>}
			</div>
			<div>
				<button type='submit' className='btn btn-primary'>
					{values.id > 0 ? "Update" : "Create"}
				</button>

			</div>
		</form>
	);
};

EmpleadoForm.propTypes = {};

export default EmpleadoForm;