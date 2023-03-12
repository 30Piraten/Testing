const shoppingList = [
    'diapers',
    'razors',
    'guacamole',
    'paper',
    'milk',
];

test('the shoppingList has milk on it', () => {
    expect(shoppingList).toContain('milk');
    expect(new Set(shoppingList)).toContain('paper');
});