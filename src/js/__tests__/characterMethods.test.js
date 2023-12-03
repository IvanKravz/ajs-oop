// import Character from "../Character";
import Bowman from "../Bowman";

test('Повышаем уровень героя', () => {
    const result = new Bowman ('Joy', 'Bowman');
    result.levelUp()
    expect(result).toEqual({
        name: "Joy",
        type: "Bowman",
        health: 100,
        level: 2,
        attack: 30,
        defence: 30,
    })
})

test('Уровень героя не повышается если health=0', () => {
    const result = new Bowman ('Joy', 'Bowman');
    result.health = 0
    expect(() => {
        return result.levelUp()
    }).toThrow();
})

test('Уровень наносимого урона', () => {
    const result = new Bowman ('Joy', 'Bowman');
    result.damage(20)
    expect(result).toEqual({
        name: "Joy",
        type: "Bowman",
        health: 85,
        level: 1,
        attack: 25,
        defence: 25,
    })
})

test('Урон не наносится если health=0', () => {
    const result = new Bowman ('Joy', 'Bowman');
    result.health = 0
    result.damage(20)
    expect(result).toEqual({
        name: "Joy",
        type: "Bowman",
        health: 0,
        level: 1,
        attack: 25,
        defence: 25,
    })
})
