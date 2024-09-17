"use client";
import { useNavigate } from 'react-router-dom';
import styles from './EmpleadosListas.module.css';

const EmpleadosListas = ({handlerEmpleadoSelected, handlerRemoveEmpleado, empleado = []}) => {

  const navigate = useNavigate()

  const handlerMoreInfo = () => {
    navigate(`/empleado/${empleado.id}`)
  }

	return (
		<tr className={styles.tableRow}>
      <td>{empleado.name}</td>
      <td>{empleado.puesto}</td>
      <td>{empleado.email}</td>
      <td>
        <button className={`${styles.btn} ${styles['btn-secondary']} ${styles['btn-sm']}`} onClick={handlerMoreInfo}>
          +Info
        </button>
      </td>
      <td>
        <button className={`${styles.btn} ${styles['btn-secondary']} ${styles['btn-sm']}`} onClick={() => handlerEmpleadoSelected(empleado)}>
          Update
        </button>
      </td>
      <td>
        <button className={`${styles.btn} ${styles['btn-danger']} ${styles['btn-sm']}`} onClick={() => handlerRemoveEmpleado(empleado.id)}>
          Delete
        </button>
      </td>
    </tr>
	);
};

EmpleadosListas.propTypes = {};

export default EmpleadosListas;