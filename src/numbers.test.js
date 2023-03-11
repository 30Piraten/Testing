test('a plus b', () => {
    let a = 5;
    let b = 10;

    expect(a + b).toBe(15);
    expect(a - b).toEqual(-5);
    expect(a + b).toBeGreaterThan(12);
    expect(a + b).toBeLessThan(22);
    expect(a + b).toBeLessThanOrEqual(15);
    expect(a + b).toBeGreaterThanOrEqual(15);
});

test('to be close to', () => {
    let a = 1;
    let b = 2;
    let d = 0.15;
    let e = 1.15;

    expect(a / b).toBeCloseTo(0.5)
    expect(d + e).toBeCloseTo(1.30)
});