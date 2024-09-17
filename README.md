Trabajo Práctico N°4 - ReactJs / Json-Server - Administrador de Empleados
Descripción
Este proyecto es una aplicación web sencilla desarrollada con ReactJS para administrar empleados. Utiliza Json-Server como base de datos simulada, lo que facilita su configuración y uso durante el desarrollo. La aplicación permite realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) sobre los empleados, gestionando la información básica y validando datos importantes como el email, número de documento, y número de teléfono.

Dependencias Utilizadas
React Router DOM: Para la navegación entre las diferentes páginas de la aplicación.
Json-Server: Para simular una base de datos y servir los datos de prueba.
Axios: Para realizar peticiones HTTP al Json-Server.

Pasos para la Instalación
Clona este repositorio:
git clone https://github.com/LucasVila02/tpFinalLab-reactJs.git
Ve al directorio del proyecto:
cd tpFinalLab-reactJs
Instala las dependencias necesarias:
npm install
Inicia la aplicación:
npm run dev

En otro terminal, configura e inicia Json-Server:
Instala Json-Server si no lo tienes instalado:
npm install -g json-server
Ve a la carpeta del archivo db.json (que está en la raíz del proyecto) y ejecuta el servidor:
npm start


Uso de la Aplicación
Inicio de Sesión:
Al ingresar en la web, te encontrarás con un formulario de inicio de sesión que se conecta a la base de datos simulada. Si no tienes un usuario registrado, puedes crear uno a través del formulario de "Crear nuevo usuario".

Páginas:
Home: Aquí verás datos básicos, como un contador de administradores y empleados.

Empleados:
Formulario para crear un nuevo empleado.
Buscador para filtrar empleados por nombre.
Listado de empleados creados con opciones para editar, eliminar o ver más información.
	Al hacer clic en "Ver más información", se te redireccionará a una página detallada 	con los datos personales del empleado.

Funcionalidades de Empleados:
Crear empleados: Agregar nuevos empleados a la base de datos simulada.
Listar empleados: Mostrar todos los empleados registrados y filtrarlos por nombre.
Editar empleados: Modificar la información de un empleado existente.
Eliminar empleados: Eliminar un empleado del sistema.

Validaciones
Las validaciones se han implementado tanto en el frontend como en el backend:
Backend (Services):
Validaciones en los métodos CRUD para asegurar que no se repitan datos únicos como el email, número de documento y número de teléfono.
Frontend (Formulario):
Validaciones básicas en el formulario según el tipo de input (email, texto, número, etc.).
Recursos
Base de datos: El archivo db.json en la raíz del proyecto simula la base de datos, y es usado por Json-Server.
