
import { useState } from "react";

const useForm = (initialValues, callback) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  const validate = (name, value, type) => {
    let error = '';

    if (type === 'text') {
      const textRegex = /^[a-zA-Z\s]+$/;
      if (!textRegex.test(value)) {
        error = `${name} solo debe contener letras y espacios.`;
      } else if (value.length < 3) {
        error = `${name} debe tener al menos 3 caracteres.`;
      } else if (value.length > 50) {
        error = `${name} debe tener menos de 50 caracteres.`;
      }
    }


    if (type === 'email') {
      const emailRegex = /\S+@\S+\.\S+/;
      if (!emailRegex.test(value)) {
        error = 'Formato de email inválido.';
      }
    }

    if (type === 'number') {
      const numberValue = Number(value);
      if (isNaN(numberValue)) {
        error = 'El valor debe ser un número válido.';
      } else if (numberValue < 0) {
        error = 'El número debe ser mayor o igual a 0.';
      } else if (numberValue > 99999999) {
        error = 'El número debe ser menor o igual a 99999999.';
      }
    }
    return error;
  };

  const handlerChange = (e) => {
    const { name, value, type } = e.target;
    setValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    const error = validate(name, value, type);
    setErrors((prevState) => ({
      ...prevState,
      [name]: error ? error : '', 
    }));
  };

  const handlerSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};


    Object.keys(values).forEach((key) => {
      const error = validate(key, values[key], e.target[key]?.type);
      if (error) {
        newErrors[key] = error;
      }
    });


    if (Object.keys(newErrors).length === 0) {
      callback();
    } else {
      setErrors(newErrors);
    }
  };

  return {
    values,
    errors,
    handlerChange,
    handlerSubmit,
    setValues,
  };
};

export default useForm;