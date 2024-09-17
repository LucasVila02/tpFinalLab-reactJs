"use client";
import { Outlet } from 'react-router-dom';
import styles from './PrivateLayout.module.css';
import { useTheme } from '../../context/ThemeContext';
import { NavBar } from '../../components';




const PrivateLayout = () => {

	const { theme } = useTheme();

	return (
		<div className={`${styles.privatelayout} ${theme}`}>
			<header className={styles.header}>
				<NavBar />
			</header>
			<main className={styles.main}>
				<Outlet />
			</main>
			<footer className={styles.footer}>
				&copy; 2024 Emplea-PRO
			</footer>
		</div>
	);
};

PrivateLayout.propTypes = {};

export default PrivateLayout;