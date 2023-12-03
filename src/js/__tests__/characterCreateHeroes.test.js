import Character from "../Character";
import Bowman from "../Bowman";
import Swordsman from "../Swordsman";
import Magician from "../Magician";
import Undead from "../Undead";
import Zombie from "../Zombie";
import Daemon from "../Daemon";

test('Тип героя отсутствует в списке', () => {
    expect(() => {
        const typeHeroes = new Character('Joy', 'Tom')
        return typeHeroes
    }).toThrow();
})

test('Создание Bowman', () => {
    const result = new Bowman('Joy', 'Bowman')
    expect(result).toEqual({
        name: "Joy",
        type: "Bowman",
        health: 100,
        level: 1,
        attack: 25,
        defence: 25,
    })
})

test('Создание Swordsman', () => {
    const result = new Swordsman('Joy', 'Swordsman')
    expect(result).toEqual({
        name: "Joy",
        type: "Swordsman",
        health: 100,
        level: 1,
        attack: 40,
        defence: 10,
    })
})

test('Создание Magician', () => {
    const result = new Magician('Joy', 'Magician')
    expect(result).toEqual({
        name: "Joy",
        type: "Magician",
        health: 100,
        level: 1,
        attack: 10,
        defence: 40,
    })
})

test('Создание Undead', () => {
    const result = new Undead('Joy', 'Undead')
    expect(result).toEqual({
        name: "Joy",
        type: "Undead",
        health: 100,
        level: 1,
        attack: 25,
        defence: 25,
    })
})

test('Создание Zombie', () => {
    const result = new Zombie('Joy', 'Zombie')
    expect(result).toEqual({
        name: "Joy",
        type: "Zombie",
        health: 100,
        level: 1,
        attack: 40,
        defence: 10,
    })
})

test('Создание Daemon', () => {
    const result = new Daemon('Joy', 'Daemon')
    expect(result).toEqual({
        name: "Joy",
        type: "Daemon",
        health: 100,
        level: 1,
        attack: 10,
        defence: 40,
    })
})
