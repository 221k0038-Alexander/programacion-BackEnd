// Saul Alexander Che Caamal

function suma(a, b) {
    return a + b;
}

// Inciso a) - suma exacta
function sumaExacta(a, b) {
    return a + b;
}

// Inciso b) - Comparación de objetos
function crearPersona(nombre, edad) {
    return { nombre, edad };
}

// Inciso c) - Valores nulos y definidos
function obtenerNull() {
    return null;
}

function obtenerUndefined() {
    return undefined;
}

function obtenerDefinido() {
    return "Hola";
}

// Inciso d) - Comparaciones numéricas
function obtenerNumero() {
    return 10;
}

// Inciso e) - Expresiones regulares
function obtenerCadena() {
    return "Hola Mundo";
}

// Inciso f) - Contenido en arrays
function obtenerArray() {
    return [1, 2, 3, 4, 5];
}

// Inciso g) - Negación con matchers con .not
function obtenerValor() {
    return 5;
}

// Inciso h) - Promesas
function promesaExitosa() {
    return Promise.resolve("éxito");
}

function promesaFallida() {
    return Promise.reject("error");
}

module.exports = { suma, sumaExacta, crearPersona, obtenerNull,
obtenerUndefined, obtenerDefinido, obtenerNumero, obtenerCadena,obtenerArray, obtenerValor, promesaExitosa, promesaFallida };