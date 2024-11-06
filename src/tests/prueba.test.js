const multiplicar = (a, b) => {
    return a * b
}

test('Multiplicar 2 * 2 debe dar 4', () => { 
    const resultado = multiplicar(2, 2)
    expect(resultado).toBe(4)
})

const cincuentaProciento = (a, b) => {
    return a / b
}

test('El 50% de 100 debe dar 50', () => { 
    const resultado = cincuentaProciento(100, 2)
    expect(resultado).toBe(50)
 })