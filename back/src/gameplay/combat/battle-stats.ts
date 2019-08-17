import { Character } from '../../types/character'
import { Weapon, Trinket, Shield } from '../../types/items'
import { RawBattleStats } from '../../types/combat'

type ComputationFunction = (
  character: Character,
  weapon: Weapon,
  shield: Shield,
  trinket: Trinket
) => number

const getPhysicalOrMagical = (
  physicalFunction: ComputationFunction,
  magicalFunction: ComputationFunction
) => (
  character: Character,
  weapon: Weapon,
  shield: Shield,
  trinket: Trinket
): number => ({
  physical: physicalFunction,
  magical: magicalFunction
}[weapon.damageType](character, weapon, shield, trinket))

// Damage computation
const getPhysicalDamage = (
  character: Character,
  weapon: Weapon,
  shield: Shield,
  trinket: Trinket
): number => (
  character.stats.str
  + weapon.dmg
  + trinket.physicalDamage
)

const getMagicalDamage = (
  character: Character,
  weapon: Weapon,
  shield: Shield,
  trinket: Trinket
): number => (
  character.stats.mag
  + weapon.dmg
  + trinket.physicalDamage
)

export const getDamage: ComputationFunction = (
  getPhysicalOrMagical(getPhysicalDamage, getMagicalDamage)
)

// Hit chance computation
const getPhysicalHitChance = (
  character: Character,
  weapon: Weapon,
  shield: Shield,
  trinket: Trinket
): number => (
  character.stats.dex
  + weapon.hit
  + trinket.physicalHit
)

const getMagicalHitChance = (
  character: Character,
  weapon: Weapon,
  shield: Shield,
  trinket: Trinket
): number => (
  Math.floor((character.stats.dex + character.stats.lck) / 2)
  + weapon.hit
  + trinket.magicalHit
)

export const getHitChance: ComputationFunction = (
  getPhysicalOrMagical(getPhysicalHitChance, getMagicalHitChance)
)

// Action speed computation
export const getActionSpeed = (
  character: Character,
  weapon: Weapon,
  shield: Shield,
  trinket: Trinket
): number => {
  const totalWeight = weapon.weight
  + trinket.weight
  + shield.weight
  const weightReduction = Math.floor(character.stats.str / 5)
  return (
    character.stats.spd
    - (weightReduction > totalWeight ? 0 : totalWeight - weightReduction)
  )
}

// Critical chances computation
const getPhysicalCriticalChance = (
  character: Character,
  weapon: Weapon,
  shield: Shield,
  trinket: Trinket
): number => (
  Math.floor((character.stats.dex + character.stats.lck) / 2)
  + weapon.crit
  + trinket.physicalCrit
)

const getMagicalCriticalChance = (
  character: Character,
  weapon: Weapon,
  shield: Shield,
  trinket: Trinket
): number => (
  Math.floor((character.stats.dex + character.stats.lck) / 2)
  + weapon.crit
  + trinket.magicalCrit
)

export const getCriticalChance: ComputationFunction = (
  getPhysicalOrMagical(getPhysicalCriticalChance, getMagicalCriticalChance)
)

// Crti avoid computation
export const getCriticalAvoid = (
  character: Character,
  weapon: Weapon,
  shield: Shield,
  trinket: Trinket
): number => (
  character.stats.lck
  + shield.critAvoid
  + trinket.critAvoid
)

// Physical defense computation
export const getPhysicalDefense = (
  character: Character,
  weapon: Weapon,
  shield: Shield,
  trinket: Trinket
): number => (
  character.stats.def
  + shield.physicalDefense
  + trinket.physicalDefense
)

// Magical defense computation
export const getMagicalDefense = (
  character: Character,
  weapon: Weapon,
  shield: Shield,
  trinket: Trinket
): number => (
  character.stats.res
  + shield.magicalDefense
  + trinket.magicalDefense
)

// Empty slots
const noShield: Shield = {
  name: '',
  physicalDefense: 0,
  magicalDefense: 0,
  critAvoid: 0,
  weight: 0
}

const noTrinket: Trinket = {
  name: '',
  physicalDefense: 0,
  magicalDefense: 0,
  physicalHit: 0,
  magicalHit: 0,
  physicalDamage: 0,
  magicalDamage: 0,
  physicalCrit: 0,
  magicalCrit: 0,
  critAvoid: 0,
  weight: 0
}

// Compose raw battle stats from character and weapon
export const calculateRawBattleStats = (
  character: Character,
  weapon: Weapon,
  shield: Shield = noShield,
  trinket: Trinket = noTrinket
): RawBattleStats => ({
  weaponType: weapon.type,

  dmg: getDamage(character, weapon, shield, trinket),
  hit: getHitChance(character, weapon, shield, trinket),
  actionSpeed: getActionSpeed(character, weapon, shield, trinket),
  avoid: getActionSpeed(character, weapon, shield, trinket),
  crit: getCriticalChance(character, weapon, shield, trinket),
  critAvoid: getCriticalAvoid(character, weapon, shield, trinket),

  physicalDefense: getPhysicalDefense(character,weapon, shield, trinket),
  magicalDefense: getMagicalDefense(character, weapon, shield, trinket)
})
