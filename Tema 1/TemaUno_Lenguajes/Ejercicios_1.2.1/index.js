// Ejercicios 1.2.1: sintaxis basica de Node.js
// Saul Alexander Che Caamal


/*
Ejercicio c
Creación de un array que contiene diferentes tipos de datos
y muestra su contenido en la consola
*/

// Array con diferentes tipos de datos
let datosMixtos = [
  "Marco",        // String  (texto)
  20,             // Number  (numero entero)
  true,           // Boolean (verdadero o falso)
  null,           // Null    (valor nulo)
  { carrera: "Sistemas" } // Object  (conjunto de datos)
];

// Mostrar el array completo en consola
console.log(datosMixtos);   


/*
Ejercicio d
Función polinómica de segundo grado 
Recibe dos números y muestra el resultado en consola
*/

function polinomica(x, y) {
  // Cálculo de la función: x^2 + y
  let resultado = (x * x) + y;

  // Mostrar el resultado
  console.log("Resultado:", resultado);
}

// Llamada a la función
polinomica(2, 3);


/*
Ejercicio e
Función flecha que recibe un string
y aplica un método de manipulación de cadenas
*/

// Función flecha que convierte el texto a mayúsculas
const imprimirTexto = (texto) => {
  console.log(texto.toUpperCase());
};

// Llamada a la función
imprimirTexto("hola mundo");


/*
Ejercicio f
Función que utiliza un bucle para imprimir
los números del 10 al 1 en orden descendente
*/

function imprimirDescendente() {
  // Bucle que inicia en 10 y termina en 1
  for (let i = 10; i >= 1; i--) {
    console.log(i);
  }
}

// Llamada a la función
imprimirDescendente();


/*
Ejercicio g
Creación de un objeto que representa
un objeto de la institución educativa
*/

// Objeto que representa un salón de clases
let salon = {
  nombre: "Laboratorio de Cómputo",
  edificio: "A",
  capacidad: 30,
  tieneProyector: true,
  materia: "Programación"
};

// Mostrar el objeto en consola
console.log(salon);



/*
Ejercicio h
Objeto con un método que imprime una descripción
*/

// Objeto 
let computadora = {
  marca: "Dell",
  encendida: true,

  // Método del objeto
  describir: function () {
    console.log("La computadora es marca " + this.marca);
  }
};

// Llamada al método
computadora.describir();




/*
Ejercicio j
Función que simula una operación asíncrona
usando setTimeout y callback
*/

// Función asíncrona simulada
function operacionAsincrona(callback) {
  // Simula una espera de 2 segundos
  setTimeout(function () {
    // Resultado de la operación
    let resultado = "Operación completada";

    // Ejecuta el callback con el resultado
    callback(resultado);
  }, 2000);
}

// Callback que maneja el resultado
function mostrarResultado(mensaje) {
  console.log(mensaje);
}

// Llamada a la función
operacionAsincrona(mostrarResultado);




/*
Ejercicio k
Conversión de una cadena a número
con manejo de errores
*/

function convertirANumero(cadena) {
  try {
    // Intentar convertir la cadena a número
    let numero = Number(cadena);

    // Verificar si la conversión fue válida
    if (isNaN(numero)) {
      throw new Error("La cadena no es un número válido");
    }

    // Mostrar el número convertido
    console.log("Número convertido:", numero);
  } catch (error) {
    // Manejo del error
    console.log("Error:", error.message);
  }
}

// Pruebas
convertirANumero("123");   // Correcto
convertirANumero("abc");   // Error
