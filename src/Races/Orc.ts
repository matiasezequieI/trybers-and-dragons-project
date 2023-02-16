import Race from './Race';

class Orc extends Race {
  private static count = 0;

  private _maxLifePoints = Number();

  constructor(name: string, dexterity: number, maxLifePoints = 74) {
    super(name, dexterity);

    this._maxLifePoints = maxLifePoints;
    Orc.count += 1;
  }

  static createdRacesInstances(): number {
    return Orc.count;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Orc;
