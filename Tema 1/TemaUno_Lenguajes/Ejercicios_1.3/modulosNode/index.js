// Saul Alexander Che Caamal
const fs = require('fs'); // Importa la herramienta de sistema de archivo

fs.writeFile('archivo.txt', 'Hola desde NodeJS', (err) => {
    if (err) throw err;
    console.log('El archivo ha sido creado con éxito.');

});




// Leer el archivo después de escribirlo
fs.readFile('archivo.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log('Contenido del archivo:');
    console.log(data);
})