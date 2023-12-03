import Character from './Character'

export default class Swordsman extends Character {
    constructor(name, type) {
        super(name, type);
        this.attack = 40;
        this.defence = 10;
    }
}

// const Boris = new Swordsman('Boris', 'Swordsman')
// console.log(Boris)