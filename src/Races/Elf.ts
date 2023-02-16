import Race from './Race';

class Elf extends Race {
  private static count = 0;

  private _maxLifePoints = Number();

  constructor(name: string, dexterity: number, maxLifePoints = 99) {
    super(name, dexterity);

    this._maxLifePoints = maxLifePoints;
    Elf.count += 1;
  }

  static createdRacesInstances(): number {
    return Elf.count;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Elf;
