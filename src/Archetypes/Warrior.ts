import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Warrior extends Archetype {
  private static count = 0;

  private _energy: EnergyType;
  
  constructor(name: string) {
    super(name);
    this._energy = 'stamina';
    
    Warrior.count += 1;
  }

  static createdArchetypeInstances(): number {
    return Warrior.count;
  }

  get energyType(): EnergyType {
    return this._energy;
  }
}

export default Warrior;