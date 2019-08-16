import { GenericWeapon, Weapon, WeaponsList } from '../../../types/items'

const createSword = (payload: GenericWeapon): Weapon => ({
  ...payload,
  type: 'sword'
})

const weapons: WeaponsList = {

  // Iron sword
  iron_sword: createSword({
    name: 'Epée de fer',
    damageType: 'physical',
    dmg: 5,
    hit: 90,
    crit: 0,
    minRange: 1,
    maxRange: 1,
    weight: 5,
    level: 'E',
    maxDurability: 40
  }),
  iron_sword_plus: createSword({
    name: 'Epée de fer +',
    damageType: 'physical',
    dmg: 6,
    hit: 100,
    crit: 0,
    minRange: 1,
    maxRange: 1,
    weight: 5,
    level: 'E',
    maxDurability: 45
  }),

  // Steel sword
  steel_sword: createSword({
    name: 'Epée d\'acier',
    damageType: 'physical',
    dmg: 8,
    hit: 85,
    crit: 0,
    minRange: 1,
    maxRange: 1,
    weight: 10,
    level: 'D',
    maxDurability: 50
  }),
  steel_sword_plus: createSword({
    name: 'Epée d\'acier +',
    damageType: 'physical',
    dmg: 10,
    hit: 85,
    crit: 0,
    minRange: 1,
    maxRange: 0,
    weight: 10,
    level: 'D',
    maxDurability: 55
  })

}

export default weapons
