abstract class Race {
  private _name = String();
  private _dexterity = Number();

  constructor(name: string, dexterity: number) {
    this._name = name;
    this._dexterity = dexterity;
  }
  
  get name() {
    return this._name;
  }

  get dexterity() {
    return this._dexterity;
  }

  static createdRacesInstances(): number {
    throw new Error('Not implemented');
  }

  abstract get maxLifePoints(): number;
}

export default Race;