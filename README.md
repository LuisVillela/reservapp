
# Instrucciones

## Instrucciones para correr el proyecto

### Clonar el repositorio con comandos git o con la opcion rapida de git dektop:
git clone <URL_DEL_REPOSITORIO>
cd reservapp

### Agregar el script de las entidades (opcional) Si necesitan cargar las entidades en la base de datos (crear las tablas), pueden usar el script SQL proporcionado.(sheme.sql)

a. Copia el archivo schema.sql al contenedor MySQL:
docker cp schema.sql reservapp_db:/schema.sql

b. Conéctate al contenedor MySQL:
docker exec -it reservapp_db mysql -u root -p
(Usar la contraseña y password del docker-compose.yml).

c. Ejecuta el script SQL dentro del contenedor: Una vez dentro del contenedor de MySQL:
USE reservapp;
SOURCE /schema.sql;

Esto creará las tablas necesarias para el funcionamiento del backend.

### Ejecutar el proyecto con Docker Compose Una vez que estén listos, pueden ejecutar todos los servicios con tres comandos:

front end: npm start

back end: cd Backend, node index.js

db: docker-compose up --build

Frontend: http://localhost:3000
Backend: http://localhost:5001
MySQL: en el puerto 3306

### en caso fallen las dependecias estas son las que se ocupan:
fornt end:
cd frontend
npm install
npm install axios react-router-dom tailwindcss postcss autoprefixer heroicons
npx tailwindcss init -p

back end:
cd backend
npm install
npm install express mysql2 cors body-parser dotenv

