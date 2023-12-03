import Character from './Character'

export default class Undead extends Character {
    constructor(name, type) {
        super(name, type);
        this.attack = 25;
        this.defence = 25;
    }
}

// const Petr = new Undead('Petr', 'Undead')
// console.log(Petr)