import Race from './Race';

class Halfling extends Race {
  private static count = 0;

  private _maxLifePoints = Number();

  constructor(name: string, dexterity: number, maxLifePoints = 60) {
    super(name, dexterity);

    this._maxLifePoints = maxLifePoints;
    Halfling.count += 1;
  }

  static createdRacesInstances(): number {
    return Halfling.count;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Halfling;
