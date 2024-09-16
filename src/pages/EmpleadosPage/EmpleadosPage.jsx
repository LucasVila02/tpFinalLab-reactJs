"use client";
import EmpleadoForm from '../../components/EmpleadoForm/EmpleadoForm';
import EmpleadosGrid from '../../components/EmpleadosGrid/EmpleadosGrid';
import useAxiosEmpleados from '../../hooks/useAxiosEmpleados';

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
			<div className='container my-4'>
				<h1>Empleados</h1>
				<div className='row' >
					<div className='col'>
						<EmpleadoForm
							empleadoSelected={empleadoSelected}
							handlerAdd={handlerAddEmpleado}
						/>
						{error && <p style={{ color: 'red' }}>{error}</p>}
					</div>

					<div className='col'>
						{empleados.length > 0 ?
							<EmpleadosGrid
								handlerEmpleadoSelected={handlerEmpleadoSelected}
								handlerRemoveEmpleado={handlerRemoveEmpleado}
								empleados={empleados} />
							: <div className='alert alert-warning'>No hay empleados en el sistema</div>
						}

					</div>
				</div>
			</div>

		</>


	);
};

EmpleadosPage.propTypes = {};

export default EmpleadosPage;