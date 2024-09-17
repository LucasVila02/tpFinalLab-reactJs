"use client";

import { useState, useEffect } from "react";
import styles from "./HomePage.module.css";
import { findAll as findAllEmpleados } from "../../services/EmpleadosServices";
import { findAll as findAllUsers } from "../../services/LoginServices";


const HomePage = () => {

  const [adminCount, setAdminCount] = useState(0);
  const [employeeCount, setEmployeeCount] = useState(0);
  const [admins, setAdmins] = useState([]);

  const countUsers = async () => {
    try {
      const result = await findAllUsers();
      setAdmins(result)
      setAdminCount(result.length);
    } catch (error) {
      console.error("Error fetching employees:", error);
    }
  };

  const countEmpleados = async () => {
    try {
      const result = await findAllEmpleados();
      setEmployeeCount(result.data.length);
    } catch (error) {
      console.error("Error fetching employees:", error);
    }
  };


  useEffect(() => {
    countEmpleados();
    countUsers();
  }, []);

  return (
    <div className={styles.homepage}>
      <h1>Informacíon general:</h1>


      <div className={styles.cardContainer}>
        <div className={styles.card}>
          <h2>Administradores</h2>
          <p>Cantidad: {adminCount}</p>
        </div>

        <div className={styles.card}>
          <h2>Empleados</h2>
          <p>Cantidad: {employeeCount}</p>
        </div>
      </div>

      <div className={styles.adminsList}>
        <h2>Administradores Registrados</h2>
        {admins.length > 0 ? (
          <ul>
            {admins.map(admin => (
              <li key={admin.id}>
                <p><strong>Nombre:</strong> {admin.name}</p>
                <p><strong>Email:</strong> {admin.email}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No hay administradores registrados.</p>
        )}
      </div>
    </div>
  );
};

export default HomePage;