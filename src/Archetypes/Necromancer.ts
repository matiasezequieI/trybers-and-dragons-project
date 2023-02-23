import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Necromancer extends Archetype {
  private static count = 0;

  private _energy: EnergyType;
  
  constructor(name: string) {
    super(name);
    this._energy = 'mana';
    
    Necromancer.count += 1;
  }

  static createdArchetypeInstances(): number {
    return Necromancer.count;
  }

  get energyType(): EnergyType {
    return this._energy;
  }
}

export default Necromancer;