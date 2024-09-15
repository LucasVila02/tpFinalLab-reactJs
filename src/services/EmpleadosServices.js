import axios from "axios"




const baseUrl = "http://localhost:3000/empleados";

const getNextId = async () => {
  try {
    const response = await axios.get(baseUrl);
    const empleados = response.data;

    // Encuentra el ID máximo en los empleados existentes
    const maxId = empleados.reduce((max, empleado) => {
      // Convierte el ID a número para comparar
      const idAsNumber = parseInt(empleado.id, 10);
      return idAsNumber > max ? idAsNumber : max;
    }, 0);

    // Devuelve el siguiente ID como cadena
    return (maxId + 1).toString();
  } catch (error) {
    console.error('Error al obtener el siguiente ID:', error);
    return '1';  // En caso de error, comienza con ID 1
  }
};

export const findAll  = async () => {
    try {
      const response = await axios.get(baseUrl);
      return response;
    } catch (error) {
      console.log(error)
    }
    return null;
  }


  export const findById = async (id) => {
    try {
      const response = await axios.get(`${baseUrl}/${id}`);
      return response;
    } catch (error) {
      console.error('Error al obtener el empleado por ID:', error);
      return null;
    }
  };

  
  export const create = async  ({name,puesto, departamento, email, telefono, nroDocumento }) =>{
    try {
      
      const nextId = await getNextId();

      const response  =  await axios.post(baseUrl, {
        id : nextId,
        name, 
        puesto,
        departamento,
        email,
        telefono,
        nroDocumento
      });
      return response;
      
    } catch (error) {
      console.log(error);
    }
    return undefined;
  };
  
  export const update = async  ({id, name,puesto, departamento, email, telefono, nroDocumento}) =>{
    try {
      const response  =  await axios.put(`${baseUrl}/${id}`, {
        name, 
        puesto,
        departamento,
        email,
        telefono,
        nroDocumento
      });
      return response;
      
    } catch (error) {
      console.log(error);
    }
    return undefined;
  };
  

  export const remove = async (id) => {
    try {
      const response = await axios.delete(`${baseUrl}/${id}`);
      console.log('Respuesta del servidor:', response);
      return response;
    } catch (error) {
      console.log('Error al eliminar empleado:', error);
    }
  };
  