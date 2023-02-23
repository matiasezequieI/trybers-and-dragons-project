import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Mage extends Archetype {
  private static count = 0;

  private _energy: EnergyType;
  
  constructor(name: string) {
    super(name);
    this._energy = 'mana';
    
    Mage.count += 1;
  }

  static createdArchetypeInstances(): number {
    return Mage.count;
  }

  get energyType(): EnergyType {
    return this._energy;
  }
}

export default Mage;