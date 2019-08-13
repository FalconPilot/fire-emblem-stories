import { WeaponsList } from '../../types/items'

const weapons: WeaponsList = {

  // Iron sword
  iron_sword: {
    name: 'Epée de fer',
    dmg: 5,
    hit: 90,
    crit: 0,
    minRange: 1,
    maxRange: 1,
    weight: 5,
    level: 'E',
    maxDurability: 40
  },
  iron_sword_plus: {
    name: 'Epée de fer +',
    dmg: 6,
    hit: 100,
    crit: 0,
    minRange: 1,
    maxRange: 1,
    weight: 5,
    level: 'E',
    maxDurability: 45
  },

  // Steel sword
  steel_sword: {
    name: 'Epée d\'acier',
    dmg: 8,
    hit: 85,
    crit: 0,
    minRange: 1,
    maxRange: 1,
    weight: 10,
    level: 'D',
    maxDurability: 50
  },
  steel_sword_plus: {
    name: 'Epée d\'acier +',
    dmg: 10,
    hit: 85,
    crit: 0,
    minRange: 1,
    maxRange: 0,
    weight: 10,
    level: 'D',
    maxDurability: 55
  }

}

export default weapons
