test('should not contain h', () => {
    expect('Rautenberg').not.toMatch(/h/);
});

test('should include ten', () => {
    expect('Rautenberg').toMatch(/ten/);
});