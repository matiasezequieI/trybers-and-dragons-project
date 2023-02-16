import Race from './Race';

class Dwarf extends Race {
  private static count = 0;

  private _maxLifePoints = Number();

  constructor(name: string, dexterity: number, maxLifePoints = 80) {
    super(name, dexterity);

    this._maxLifePoints = maxLifePoints;
    Dwarf.count += 1;
  }

  static createdRacesInstances(): number {
    return Dwarf.count;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Dwarf;
