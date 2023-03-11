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


test('if a value is true', () => {
    let result = 'user'

    if (result !== null) true;

    expect(result).toBeTruthy();
});

test('if a value is true', () => {
    let code = 'whack'

    if ('meh!' !== code) true;

    expect(code).toBeTruthy();
});

test('if a value is false', () => {
    let a = '';
    let b = null;
    let c = undefined;
    let d = 0;
    let e = NaN;

    expect(a).toBeFalsy();
    expect(b).toBeFalsy();
    expect(c).toBeFalsy();
    expect(d).toBeFalsy();
    expect(e).toBeFalsy();
});