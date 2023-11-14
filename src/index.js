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
        password:"",
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
