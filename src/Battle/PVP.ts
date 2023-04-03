import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  constructor(
    private _fighter1: Fighter,
    private _fighter2: Fighter,
  ) {
    super(_fighter1);
    super.fight();
  }

  fight(): number {
    while (this._fighter1.lifePoints > 0 && this._fighter2.lifePoints > 0) {
      this._fighter1.attack(this._fighter2);
      this._fighter2.attack(this._fighter1);
    }

    if (this._fighter1.lifePoints === -1) {
      return -1;
    }

    return 1;
  }
}