// Truthiness

// test that returns  null
test('function that returns null', () => {
    let result = null; 
    expect(result).toBeNull();
    expect(result).toBeDefined();
    expect(result).not.toBeUndefined();
    expect(result).not.toBeTruthy();
    expect(result).toBeFalsy();
})