import Character from "../Character";

test('Имя должно быть не менее 2 символов', () => {
    expect(() => {
        const result = new Character('A', 'Bowman')
        return result
    }).toThrow();
})

test('Имя должно быть не ,более 10 символов', () => {
    expect(() => {
        const result = new Character('Abcdefghijk', 'Bowman')
        return result
    }).toThrow();
})

test('Тип героя должен быть "String"', () => {
    expect(() => {
        const result = new Character('Joy', 22222)
        return result
    }).toThrow();
})

test('Наличие героя в списке', () => {
    expect(() => {
        const result = new Character('Joy', 'Joy')
        return result
    }).toThrow();
})
