import axios from "axios"

const baseUrl = "http://localhost:3000/users";

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
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error('Error al obtener los usuarios'); 
  }
};


export const create = async ({ name, email, password }) => {
  try {
    
    const empleadosResponse = await axios.get(baseUrl);
    const empleados = empleadosResponse.data;

    const isEmailDuplicated = empleados.some(e => e.email === email);
    if (isEmailDuplicated) {
      throw new Error("El email ya está en uso.");
    }

    const nextId = await getNextId();

    const response = await axios.post(baseUrl, {
      id: nextId,
      name,
      email,
      password
    });
    return response;
  } catch (error) {
    return { error: error.message };
  }
};

