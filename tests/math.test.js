const math=require ('../math');

test('soma 2 + 3 igual a 5', () => { 
    expect(math.add(2, 3)).toBe(5); 
}); 

test('diferença 500 - 250 igual a 250', () => { 
    expect(math.subtract(500, 250)).toBe(250); 
}); 

test('divisão 32 / 2 igual a 16', () => { 
    expect(math.divide(32, 2)).toBe(16); 
}); 

test('multiplicação 3 * 3 igual a 9', () => { 
    expect(math.multiply(3, 3)).toBe(9); 
}); 
