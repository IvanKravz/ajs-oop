import Character from './Character'

export default class Zombie extends Character {
    constructor(name, type) {
        super(name, type);
        this.attack = 40;
        this.defence = 10;
    }
}

// const Vova = new Zombie('Vova', 'Undead')
// console.log(Vova)