import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  constructor(
    private _fighter: Fighter,
    private _arrMonster: Array<Fighter | SimpleFighter>,
  ) {
    super(_fighter);
  }

  fight(): number {
    if (this._fighter.lifePoints > 0) {
      this._arrMonster.forEach((monster) => {
        this._fighter.attack(monster);
        monster.attack(this._fighter);
      });
    }

    if (this._fighter.lifePoints === -1) {
      return -1;
    }

    return 1;
  }
}