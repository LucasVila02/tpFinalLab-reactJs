import axios from "axios"

const baseUrl = "http://localhost:3000/empleados";

const getNextId = async () => {
  try {
    const response = await axios.get(baseUrl);
    const empleados = response.data;

   
    const maxId = empleados.reduce((max, empleado) => {
     
      const idAsNumber = parseInt(empleado.id, 10);
      return idAsNumber > max ? idAsNumber : max;
    }, 0);

    return (maxId + 1).toString();
  } catch (error) {
    console.error('Error al obtener el siguiente ID:', error);
    return '1';  
  }
};

export const findAll = async () => {
  try {
    const response = await axios.get(baseUrl);
    return response;
  } catch (error) {
    console.log(error)
    throw new Error('No se pudo encontrar a los empleados');
  }
}


export const findById = async (id) => {
  try {
    const response = await axios.get(`${baseUrl}/${id}`);
    return response;
  } catch (error) {
    console.error('Error al obtener el empleado por ID:', error);
    throw new Error('No se pudo encontrar el empleado');
  }
};


export const create = async ({id, name, puesto, departamento, email, telefono, nroDocumento }) => {
  try {


    const duplicateError = await validarDuplicados({id, email, nroDocumento, telefono });    
    if (duplicateError) {
      throw new Error(duplicateError);
    }

    const nextId = await getNextId();

    const response = await axios.post(baseUrl, {
      id: nextId,
      name,
      puesto,
      departamento,
      email,
      telefono,
      nroDocumento
    });
    return response;

  } catch (error) {
    return { error: error.message };
  }
};

export const update = async ({ id, name, puesto, departamento, email, telefono, nroDocumento }) => {
  try {

    const duplicateError = await validarDuplicados({id, email, nroDocumento, telefono });
    if (duplicateError) {
      throw new Error(duplicateError);
    }

    const response = await axios.put(`${baseUrl}/${id}`, {
      name,
      puesto,
      departamento,
      email,
      telefono,
      nroDocumento
    });
    return response;

  } catch (error) {
    return { error: error.message };
  }
};


export const remove = async (id) => {
  try {
    const response = await axios.delete(`${baseUrl}/${id}`);
    return response;
  } catch (error) {
    console.log('Error al eliminar empleado:', error);
    throw new Error('No se pudo eliminar el empleado');
  }
};


const validarDuplicados = async ({id, email, nroDocumento, telefono }) => {
  try {
    const empleadosResponse = await axios.get(baseUrl);
    const empleados = empleadosResponse.data;

    const isEmailDuplicated = empleados.some(e => e.email === email && (id ? e.id !== id : true));
    const isDocumentoDuplicated = empleados.some(e => e.nroDocumento === nroDocumento && (id ? e.id !== id : true));
    const isTelefonoDuplicated = empleados.some(e => e.telefono === telefono && (id ? e.id !== id : true));

    if (isEmailDuplicated) {
      return 'El email ya está en uso.';
    }
    if (isDocumentoDuplicated) {
      return 'El número de documento ya está en uso.';
    }
    if (isTelefonoDuplicated) {
      return 'El teléfono ya está en uso.';
    }

    return null;
  } catch (error) {
    return `Error al verificar duplicados: ${error.message}`;
  }
};