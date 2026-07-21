const { factorial, fibonacci } = require('./math');

describe('Pruebas de la función factorial', () => {
    test('El factorial de 5 debe ser 120', () => {
        expect(factorial(5)).toBe(120);
    });

    test('El factorial de 0 debe ser 1', () => {
        expect(factorial(0)).toBe(1);
    });

    test('Debe generar un error con un número negativo', () => {
        expect(() => factorial(-2)).toThrow(
            'El número debe ser un entero no negativo'
        );
    });
});

describe('Pruebas de la función Fibonacci', () => {
    test('El término 0 de Fibonacci debe ser 0', () => {
        expect(fibonacci(0)).toBe(0);
    });

    test('El término 1 de Fibonacci debe ser 1', () => {
        expect(fibonacci(1)).toBe(1);
    });

    test('El término 7 de Fibonacci debe ser 13', () => {
        expect(fibonacci(7)).toBe(13);
    });

    test('Debe generar un error con una posición negativa', () => {
        expect(() => fibonacci(-1)).toThrow(
            'La posición debe ser un entero no negativo'
        );
    });
});