"use client";
import { useEffect} from 'react';
import { useForm } from '../../hooks';
import styles from './EmpleadoForm.module.css';

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
		
		<form onSubmit={handlerSubmit} className={styles.formContainer}>
      <div className={styles.formGroup}>
        <label htmlFor='name'>Nombre:</label>
        <input
          className='form-control'
          placeholder='Nombre'
          type='text'
          name='name'
          required
          value={values.name}
          onChange={handlerChange}
        />
        {errors.name && <p className={styles.error}>{errors.name}</p>}
      </div>

      <div className={styles.formGroup}>
        <label htmlFor='puesto'>Puesto:</label>
        <input
          className='form-control'
          placeholder='Puesto'
          name='puesto'
          type='text'
          required
          value={values.puesto}
          onChange={handlerChange}
        />
        {errors.puesto && <p className={styles.error}>{errors.puesto}</p>}
      </div>

      <div className={styles.formGroup}>
        <label htmlFor='departamento'>Departamento:</label>
        <input
          className='form-control'
          placeholder='Departamento'
          name='departamento'
          type='text'
          required
          value={values.departamento}
          onChange={handlerChange}
        />
        {errors.departamento && <p className={styles.error}>{errors.departamento}</p>}
      </div>

      <div className={styles.formGroup}>
        <label htmlFor='email'>Email:</label>
        <input
          className='form-control'
          placeholder='Email'
          name='email'
          type='email'
          required
          value={values.email}
          onChange={handlerChange}
        />
        {errors.email && <p className={styles.error}>{errors.email}</p>}
      </div>

      <div className={styles.formGroup}>
        <label htmlFor='telefono'>Telefono:</label>
        <input
          className='form-control'
          placeholder='Telefono'
          name='telefono'
          type='number'
          required
          value={values.telefono}
          onChange={handlerChange}
        />
        {errors.telefono && <p className={styles.error}>{errors.telefono}</p>}
      </div>

      <div className={styles.formGroup}>
        <label htmlFor='nroDocumento'>Nro. Documento:</label>
        <input
          className='form-control'
          placeholder='Nro. Documento'
          name='nroDocumento'
          type='number'
          required
          value={values.nroDocumento}
          onChange={handlerChange}
        />
        {errors.nroDocumento && <p className={styles.error}>{errors.nroDocumento}</p>}
      </div>

      <div>
        <button type='submit' className={styles.submitButton}>
          {values.id > 0 ? "Actualizar" : "Crear"}
        </button>
      </div>
    </form>
	);
};

EmpleadoForm.propTypes = {};

export default EmpleadoForm;