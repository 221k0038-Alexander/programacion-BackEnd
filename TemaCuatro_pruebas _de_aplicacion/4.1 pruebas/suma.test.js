
// Saul Alexander Che Caamal

const { suma, sumaExacta, crearPersona, obtenerNull,
    obtenerUndefined, obtenerDefinido, obtenerNumero, obtenerCadena,
    obtenerArray, obtenerValor, promesaExitosa, promesaFallida } = require('./suma');


test('suma 1 + 2 es igual a 3', () => {
    expect(suma(1, 2)).toBe(3);
});

// Inciso a) 
test('10 + 10 es igual a 20', () => {
    expect(sumaExacta(10, 10)).toBe(20);
});

// Inciso b) 
test('los objetos son iguales', () => {
    expect(crearPersona("Saul", 22)).toEqual({ nombre: "Saul", edad: 22 });
});

// Inciso c) 
test('el valor es null', () => {
    expect(obtenerNull()).toBeNull();
});

test('el valor es undefined', () => {
    expect(obtenerUndefined()).toBeUndefined();
});

test('el valor está definido', () => {
    expect(obtenerDefinido()).toBeDefined();
});

// Inciso d) 
test('10 es mayor que 5', () => {
    expect(obtenerNumero()).toBeGreaterThan(5);
});

test('10 es menor que 20', () => {
    expect(obtenerNumero()).toBeLessThan(20);
});

test('10 es mayor o igual que 10', () => {
    expect(obtenerNumero()).toBeGreaterThanOrEqual(10);
});

// Inciso e)
test('la cadena contiene Mundo', () => {
    expect(obtenerCadena()).toMatch(/Mundo/);
});

// Inciso f)
test('el array contiene el número 3', () => {
    expect(obtenerArray()).toContain(3);
});

// Inciso g) 
test('5 no es igual a 10', () => {
    expect(obtenerValor()).not.toBe(10);
});

// Inciso h)
test('la promesa se resuelve con éxito', () => {
    return expect(promesaExitosa()).resolves.toBe("éxito");
});

test('la promesa es rechazada con error', () => {
    return expect(promesaFallida()).rejects.toBe("error");
});