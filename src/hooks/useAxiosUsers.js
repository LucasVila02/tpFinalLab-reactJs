
import { useState } from "react";
import { create } from "../services/LoginServices";
import { useNavigate } from "react-router-dom";

const useAxiosUser = () => {


  const [, setUser] = useState([]);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const createUser = async (form) => {
    try {

      const response = await create(form);
      if (response.error) {
        setError(response.error);
        
        setTimeout(() => {
          setError('');
        }, 4000);
        
        return;
        }
      setUser(user => [...user, response.data]);
      setError('');
      navigate('/');
    } catch (error) {
      setError(error)
    }
  };

  return {
    createUser,
    error,
    
  };
};

export default useAxiosUser;



