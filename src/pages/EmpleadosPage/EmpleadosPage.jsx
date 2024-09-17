"use client";
import EmpleadoForm from '../../components/EmpleadoForm/EmpleadoForm';
import EmpleadosGrid from '../../components/EmpleadosGrid/EmpleadosGrid';
import useAxiosEmpleados from '../../hooks/useAxiosEmpleados';
import styles from './EmpleadosPage.module.css';

const EmpleadosPage = () => {
  const {
    empleados,
    empleadoSelected,
    error,
    handlerAddEmpleado,
    handlerRemoveEmpleado,
    handlerEmpleadoSelected
  } = useAxiosEmpleados();

  return (

    <>
      <div className={styles.container}>
        <h1>Empleados</h1>
        <div className={styles.row}>
          <div className={styles.col}>
            <EmpleadoForm
              empleadoSelected={empleadoSelected}
              handlerAdd={handlerAddEmpleado}
            />
            {error && <p className={styles.error}>{error}</p>}
          </div>
          <div className={styles.col}>
            {empleados.length > 0 ? (
              <EmpleadosGrid
                handlerEmpleadoSelected={handlerEmpleadoSelected}
                handlerRemoveEmpleado={handlerRemoveEmpleado}
                empleados={empleados}
              />
            ) : (
              <div className={styles.alert}>No hay empleados en el sistema</div>
            )}
          </div>
        </div>
      </div>

    </>


  );
};

EmpleadosPage.propTypes = {};

export default EmpleadosPage;