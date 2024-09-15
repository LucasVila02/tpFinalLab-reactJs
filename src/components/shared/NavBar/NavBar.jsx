"use client";
import { NavLink } from 'react-router-dom';
import styles from './NavBar.module.css';
import { useTheme } from '../../../context/ThemeContext';
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/LoginContext";

import ModeNightIcon from '@mui/icons-material/ModeNight';
import LightModeIcon from '@mui/icons-material/LightMode';

const NavBar = () => {

	const { toggleTheme, theme } = useTheme()

	const { onLogout } = useAuth();
	const navigate = useNavigate();

	const handleLogout = () => {
		onLogout();
		navigate("/")
	}

	return (
		<nav className={styles.navGroup}>
			<NavLink to={"/"} >Lucas Vila</NavLink>

			<div>
				<NavLink to="/home" activeclassname="active">Home</NavLink>
				<NavLink to="/empleados" activeclassname="active">Empleados</NavLink>

				{/* componente */}
				<button onClick={toggleTheme}>{
					theme === "dark" ? (
						<LightModeIcon fontSize='small'/>
					) : (
						<ModeNightIcon fontSize='small'/>
					)}
				</button>

				<button
					className={styles.button}
					type="button"
					onClick={handleLogout}
				>
					Logout
				</button>
			</div>

		</nav>
	);
};

NavBar.propTypes = {};

export default NavBar;