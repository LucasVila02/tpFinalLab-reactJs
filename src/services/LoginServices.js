import axios from "axios"

const apiUrl = "http://localhost:8080/products";

export const findAll  = async () => {
    try {
      const response = await axios.get(apiUrl);
      return response;
    } catch (error) {
      console.log(error)
    }
    return null;
  }
  
  export const create = async  ({name, description, price}) =>{
    try {
      const response  =  await axios.post(apiUrl, {
        name, // solo cuando se llama el atributo con el valor se puede abreviar
        description,
        price : price
      });
      return response;
      
    } catch (error) {
      console.log(error);
    }
    return undefined;
  };
  
  export const update = async  ({id, name, description, price}) =>{
    try {
      const response  =  await axios.put(`${apiUrl}/${id}`, {
        name, // solo cuando se llama el atributo con el valor se puede abreviar
        description,
        price : price
      });
      return response;
      
    } catch (error) {
      console.log(error);
    }
    return undefined;
  };
  
  export const remove = async (id) =>{
    try {
     await axios.delete(`${apiUrl}/${id}`)    
    } catch (error) {
      console.log(error)
    }
  }