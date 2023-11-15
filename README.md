# modulo-4-evaluacion-final-darlingrayran

Colombian Songs API

Esta es una API simple para gestionar canciones colombianas, construida con Node.js, Express y MySQL. La API aplica cuatro operaciones basicas conocidas como CRUD que consisten en insertar, leer, actualizar y eliminar registros de canciones en una base de datos MySQL.

1. DEPENDENCIAS NECESARIAS: 

Estas dependencias varian segun la magnitud del proyecto, sin embargo, para este ejercicio he usado:

a. npm install express
b. npm install cors
c. npm install mysql2

Variables de entorno
d. npm install dotenv

2. CREACION BASE DE DATOS
   
Para la creacion de esta API, he utilizado el MYSQL WORKBENCH. Para ello, elegi un tema de interes, como lo fueron canciones de artistas colombianos y se consolidaron en una Base de datos llamada COLOMBIANSONGS, y una tabla llamada FAVORITESONGS.

Para completar los registros de la tabla, se han definido e insertado:
a. NAME= Nombre de la cancion
b. AUTHOR = Nombre del cantante
c. YEAR = año en la que se publico
d. GENRE= Genero musical al que pertece la cancion
e. COMMENTS = informacion adicional

4. CONEXION BASE DE DATOS

Para crear la conexion con la base, de datos, fue necesario crear un templete basico, en index.JS. en el cual siempre se van a especificar los mismos campos.

Se define un puerto 4000, para que el servidor se inicie en http://localhost:4000.

  const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "tu_contraseña",
    database: "colombianSongs",
});

6. APLICACION DEL CRUD

a. Obtener una canción por ID. Se define Endpoint: GET /allSongs/:id, para obténer información sobre una canción específica proporcionando su ID como parámetro en la URL.

b. Obtener todas las canciones Endpoint. Se define: GET /allSongs. Se Obtiene una lista de todas las canciones almacenadas en la base de datos.

c. Actualizar una canción existente con el Endpoint: PUT /allSongs/:id. Este endpoint actualiza la información de una canción existente proporcionando su ID en la URL y la información actualizada en el cuerpo de la solicitud.

d. Agregar una nueva canción con el Endpoint: POST /addSongs. Basicamente se añade una nueva canción a la base de datos proporcionando la información de la canción en el cuerpo de la solicitud. Manteniendo los campos de referencia. (name, author, year, genre, comments).

e. Eliminar una canción a traves del Endpoint: DELETE /allSongs/:id. Este consiste en eliminar una canción existente según su ID proporcionado en la URL.

Para verificar el funcionamiento de todos los Endpoint, se definieron algunas validaciones, las cuales se ejecutaron con la extension RAPIACLIENT en Visual Studio Code.

PROXIMAS MEJORAS PARA COMPLEMENTAR LA FUNCIONALIDAD DE LA API:

1. Desplegar en Render
2. Aplicacion en Front.


¡Disfruta explorando las canciones colombianas!











