const multiplicar = (a, b) => {
    return a * b
}

test('Multiplicar 2 * 2 debe dar 4', () => { 
    const resultado = multiplicar(2, 2)
    expect(resultado).toBe(4)
})