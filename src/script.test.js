// COMMON MATCHERS

// simple arithmetic cases

test('two plus two to be four', () => {
    expect(2 + 2).toBe(4);
});

test('two minus two to be zero', () => {
    expect(2 - 2).toBe(0);
});

test('two times two to be four', () => {
    expect(2 * 2).toBe(4);
});

test('for modulo two to be zero', () => {
    expect(2 % 2).toBe(0);
});

// object assignment tests
test('object assignment', () => {
    const person = {
        firstName: 'Kioya',
        lastName: 'Rautenberg',
        age: 30
    };
    person['class'] = 'Louvre Magnolia';
    expect(person).toEqual({ firstName: 'Kioya', lastName: 'Rautenberg', age: 30, class: 'Louvre Magnolia' });
});

// object destructuring assignment tests
test('object destructuring assignment', () => {
    const person = {
        firstName: 'Kioya',
        lastName: 'Rautenberg',
        age: 30
    };
    const { firstName, lastName, age } = person;
    expect(firstName).toBe('Kioya');
    expect(lastName).toBe('Rautenberg');
    expect(age).not.toBe(31);
});

// using the .not
test('using the.not', () => {
    const person = {
        firstName: 'Kioya',
        lastName: 'Rautenberg',
        age: 30
    };
    const { firstName, lastName, age } = person;
    expect(firstName).not.toBe('Kioa');
    expect(lastName).not.toBe('Rautenbrg');
    expect(age).toBe(30);
});

test('adding positive integers is not zero', () => {
    for (let a = 2; a < 10; a++) {
        for (let b = 1; b < 10; b++) {
            expect(a).toBeGreaterThan(1);
            expect(b).toBeGreaterThan(0);
        }
    }
});

