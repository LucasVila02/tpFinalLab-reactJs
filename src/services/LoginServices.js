import axios from "axios"

const baseUrl = "http://localhost:3000/users";

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

export const findAll = async () => {
  try {
    const response = await axios.get(baseUrl);
    return response.data; // Devuelve solo los datos
  } catch (error) {
    console.log(error);
    throw new Error('Error al obtener los usuarios'); // Lanza un error que puede ser capturado en el submitForm
  }
};


export const create = async ({ name, email, password }) => {
  try {

    const nextId = await getNextId();

    const response = await axios.post(baseUrl, {
      id: nextId,
      name,
      email,
      password
    });
    return response;

  } catch (error) {
    console.log(error);
  }
  return undefined;
};


