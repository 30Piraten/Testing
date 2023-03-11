test('should throw an error', () => {
    expect(() => {
        throw new Error('test')
    }).toThrowError('test')
})