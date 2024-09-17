"use client";
import { Outlet } from 'react-router-dom';
import styles from './PublicLayout.module.css';


const PublicLayout = () => {
	return (
		<div className={styles.publiclayout}>
			<header className={styles.header}>
				<h1>Bienvenidos a Emplea-PRO</h1>
			</header>

			<main className={styles.content}>
				<Outlet />
			</main>

			<footer className={styles.footer}>
				<p>&copy; 2024 Emplea-PRO</p>
			</footer>
		</div>
	);
};

PublicLayout.propTypes = {};

export default PublicLayout;