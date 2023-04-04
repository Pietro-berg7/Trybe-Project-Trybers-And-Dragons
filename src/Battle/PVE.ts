import Character from '../Character';
import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  constructor(
    private _fighter: Character | Fighter,
    private _arrMonster: Array<Fighter | SimpleFighter>,
  ) {
    super(_fighter);
  }

  battle = (monster: Fighter | SimpleFighter, fighter: Character | Fighter) => {
    while (monster.lifePoints > 0 && fighter.lifePoints > 0) {
      monster.receiveDamage(fighter.strength);
      if (monster.lifePoints <= 0 || fighter.lifePoints <= 0) break;
      fighter.receiveDamage(monster.strength);
    } 
  };
  
  fight(): number {
    this._arrMonster.forEach((monster) => {
      this.battle(monster, this._fighter);
    });

    if (this._fighter.lifePoints === -1) {
      return -1;
    }

    return 1;
  }
}