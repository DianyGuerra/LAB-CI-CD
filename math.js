/**
 * Calcula el factorial de un número entero no negativo.
 * Ejemplo: factorial(5) = 120.
 */
function factorial(numero) {
    if (!Number.isInteger(numero) || numero < 0) {
        throw new Error('El número debe ser un entero no negativo');
    }

    let resultado = 1;

    for (let i = 2; i <= numero; i++) {
        resultado *= i;
    }

    return resultado;
}

/**
 * Calcula el término indicado de la sucesión de Fibonacci.
 * La sucesión comienza con 0, 1, 1, 2, 3, 5...
 */
function fibonacci(posicion) {
    if (!Number.isInteger(posicion) || posicion < 0) {
        throw new Error('La posición debe ser un entero no negativo');
    }

    if (posicion === 0) {
        return 0;
    }

    if (posicion === 1) {
        return 1;
    }

    let anterior = 0;
    let actual = 1;

    for (let i = 2; i <= posicion; i++) {
        const siguiente = anterior + actual;
        anterior = actual;
        actual = siguiente;
    }

    return actual;
}

module.exports = {
    factorial,
    fibonacci
};