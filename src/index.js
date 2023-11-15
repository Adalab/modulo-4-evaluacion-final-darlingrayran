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
//6.1 Insertar una entrada en su entidad principal - ID

app.get("/allSongs/:id", async(req, res)=> {

//obtener el id: url params
const idAllSongs = req.params.id;

//validacion
if(isNaN(parseInt(idAllSongs))){
    res.json({
        success: false,
        error: "Ingresa un numero"
    });
    return;
}

// select a la DB por id
let query = "SELECT * FROM colombianSongs.favoriteSongs WHERE id = ?";

const conn = await getConnection()
//ejecutar consulta por id
const [results] = await conn.query(query, [idAllSongs]);
const numOfElements = results.length;

//validacion cuando no existe
if(numOfElements === 0){
    res.json({
        success: true,
        message: "No existe una cancion con ese ID. Ingrese un nuevo numero",
    });
    return;
}

res.json({
    results: results[0],
    });
});

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

//6.3 Actualizar una entrada existente (PUT)
//id: url params
//info actualizar: body params

app.put("/allSongs/:id", async(req, res) =>{

    const infoSongs = req.body; 
    const { name,author,year,genre,comments } = infoSongs;

    const idAllSongs = req.params.id;

    let query = "UPDATE favoriteSongs SET name=?,author=?,year=?,genre=?,comments=? WHERE id = ?"

    const conn = await getConnection();
    const [results] = await conn.query(query, [name, author, year, genre, comments,]);

    res.json({
        success: true,
        message: "Se ha actualizado el registro correctamente",
    });
});

//6.5 insertar una nueva entrada (POST)

app.post("/addSongs", async(req, res) => {

    const infoSongs = req.body; 
    const { name,author,year,genre,comments } = infoSongs;

    //consulta
    let addQuery = "INSERT INTO `favoriteSongs`(`name`,`author`,`year`,`genre`,`comments`) VALUES (?,?,?,?,?)";

    try{
        //hacer conexion DB
        const conn = await getConnection();
        //ejecutar consulta
        const [results] = await conn.query(addQuery, [name,author,year,genre,comments]);

        //validar si se inserto o no
        if(results.affectedRows === 0){
            res.json({
                success: false,
                message: "No se ha podido insertar la cancion, revisa los datos"
            });
            return;
        };

        //enviar una respuesta
        res.json({
            success: true,
            id: results.insertId, //nuevo elemento agregado
        });
    } catch(error){
        res.json({
            success: false,
            message: `Se ha generado un error${error}`,
        });
    }
});


//6.4 Eliminar una entrada existente


