
// Saul Alexander Che Caamal
import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
/*import.meta.url proporciona la URL del modulo actual.
fileURLTo path(import.meta.url) convierte esa URL en una ruta de archivo.
dirname() recupera el nombre del directorio a partir de la ruta del archivo. */

console.log(__dirname);

const app = express();
const port = 3000;

var nombreEquipo = "";

app.use(bodyParser.urlencoded({ extended: true }));

function registrador(req, res, nex) { // crear tu propio middleware
    console.log(req.body); // muestra los datos enviados por el usuario
    nombreEquipo = req.body["mascota"] + req.body["adjetivo"]; //concatena los datos enviados por el usuario
    nex(); // llama a la siguiente funcion en la pila de middleware
}

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

app.use(registrador);

app.post("/submit", (req, res) => {
    console.log(req.body);
    res.send("<h1>El nombre de tu equipo es: \n</h1>" + `<h2>${nombreEquipo}</h2>`);
});

app.listen(port, () => {
    console.log(`servidor ejecutandose en el puerto ${port}`);
});
