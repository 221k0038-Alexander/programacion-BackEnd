/*
Parte 3: NPM y Gestion de Paquetes Externos
Crea un archivo reflexion.js y responde dentro de un comentario multilinea lo siguiente:
REFLEXIÓN - EJERCICIO 1.3

1. ¿Cuál es la diferencia fundamental entre un módulo nativo (como'fs') y un módulo de NPM (como 'sillyname') en cuanto a su origen e instalación?
Un módulo nativo, como fs, ya viene incluido en Node.js.
Su origen es el propio entorno de Node.js, por lo que no necesita instalación adicional. Solo se importa y se usa directamente en el código.

Un módulo de NPM, como sillyname, no viene incluido por defecto.
Su origen es el repositorio de paquetes NPM, creado por la comunidad, y sí necesita instalarse  se usando el comando npm i sillyname.


2. Investigando la sintaxis: ¿Qué diferencia existe entre 'require' (CommonJS) y 'import' (ES Modules)? 
Considera el momento en que se cargan los módulos.
require (CommonJS):
require es el método de importación usado en el sistema CommonJS de Node.js. Los módulos se cargan en tiempo de ejecución, es decir,
 cuando el programa alcanza la línea donde se utiliza require. Esto permite que el módulo pueda importarse en cualquier parte del código, 
 incluso dentro de funciones o estructuras condicionales, lo que brinda mayor flexibilidad en la carga de módulos.

import (ES Modules):
import es la sintaxis moderna de JavaScript perteneciente al sistema ES Modules. En este caso, los módulos se cargan antes de que el código 
se ejecute, durante la fase de inicialización del archivo. Por esta razón, import debe declararse al inicio del archivo y ofrece una carga
 estática de módulos, lo que mejora la organización del código y permite optimizaciones por parte del entorno de ejecución.


3. Sobre el archivo 'package. json':

a) ¿Por qué es vital compartir este archivo pero NO la carpeta 'node_modules' al subir a un repositorio?
Porque package.json indica qué dependencias necesita el proyecto, y con ese archivo cualquiera puede volver a instalarlas. La carpeta 
node_modules no se comparte porque es muy grande y se puede generar de nuevo fácilmente.

b) ¿Qué sucede si ejecutas 'npm install' en una carpeta que solo tiene el package. json?
npm lee el archivo package.json, descarga todas las dependencias necesarias y crea la carpeta node_modules, dejando el proyecto
 listo para usarse.

*/