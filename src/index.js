//1.imports

const express = require("express");
const cors = require("cors");
const mysql = require("mysql2/promise");

//2. arrancar el servidor

const app = express();

//3. configurar

app.use(cors());
app.use(express.json()); //siempre usar

// 5. conexion base de datos: mysql - siempre igual
async function getConnection(){
    //crear y configurar conexion
    const connection = await mysql.createConnection({
        host: "localhost",
        user: "root",
        password:"Jhonathan123",
        database:"colombianSongs",
    });

    connection.connect();
    return connection;
}

//4. escuchar servidor

const port = 4000;
app.listen(port, ()=>{
    console.log(`servidor iniciado en http://localhost:${port}`);
});

//6. crear endpoints
//6.1 Insertar una entrada en su entidad principal

//6.2 Leer/listar todas las entradas existentes
app.get("/allSongs", async(req, res)=>{
    //select a la DB
    let query = "SELECT * FROM colombianSongs.favoriteSongs";
    //hacer conexion DB
    const conn = await getConnection();
    //ejecutar consulta
    const [results] = await conn.query(query);
    console.log(results);

    //* longitud del array
    const numOfElements = results.length;

    //enviar una respuesta
    res.json({
        info: {count: numOfElements}, //numero de elementos que trae la lista*
        results: results,
    });

});
//6.3 Actualizar una entrada existente
//6.4 Eliminar una entrada existente 