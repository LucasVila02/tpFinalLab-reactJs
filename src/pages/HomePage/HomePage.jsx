"use client";
import { useNavigate } from "react-router-dom";

import styles from "./HomePage.module.css";
import { useAuth } from "../../context/LoginContext";


const HomePage = () => {

	const {onLogout} = useAuth();
	const navigate = useNavigate();

	const handleLogout = () => {
		onLogout();
		navigate("/")
	}

  return (
    <div className={styles.homepage}>
      <h1>Home</h1>
      <button
	  	className={styles.button}
        type="button"
        onClick={handleLogout}
    
      >
        Logout
      </button>
    </div>
  );
};

export default HomePage;
