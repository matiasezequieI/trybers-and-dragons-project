import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Ranger extends Archetype {
  private static count = 0;

  private _energy: EnergyType;
  
  constructor(name: string) {
    super(name);
    this._energy = 'stamina';
    
    Ranger.count += 1;
  }

  static createdArchetypeInstances(): number {
    return Ranger.count;
  }

  get energyType(): EnergyType {
    return this._energy;
  }
}

export default Ranger;