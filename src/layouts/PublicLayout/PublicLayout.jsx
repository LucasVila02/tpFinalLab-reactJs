"use client";
import { Outlet } from 'react-router-dom';
import styles from './PublicLayout.module.css';


const PublicLayout = () => {
	return (
		<div className={styles.publiclayout}>
			<h1>Public Layout</h1>
 			<Outlet/>
 		</div>
	);
};

PublicLayout.propTypes = {};

export default PublicLayout;