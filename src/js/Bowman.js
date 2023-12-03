import Character from './Character'

export default class Bowman extends Character {
    constructor(name, type) {
        super(name, type);
        this.attack = 25;
        this.defence = 25;
    }
}

// const Ivan = new Bowman('Ivan', 'Bowman')
// Ivan.levelUp()
// Ivan.damage(40)
// Ivan.damage(30)
// console.log(Ivan)