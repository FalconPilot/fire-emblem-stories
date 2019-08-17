import { DamageType } from './combat'
import { CharacterType } from './character'

export type SkillLevel
  = 'E'
  | 'E+'
  | 'D'
  | 'D+'
  | 'C'
  | 'C+'
  | 'B'
  | 'B+'
  | 'A'
  | 'A+'

export type WeaponType
  = 'sword'
  | 'spear'
  | 'axe'
  | 'bow'

export interface GenericItem {
  name: string
}

export interface GenericWeapon extends GenericItem {
  dmg: number,
  hit: number,
  crit: number,
  minRange: number,
  maxRange: number,
  weight: number,
  level: SkillLevel,
  maxDurability: number,
  damageType: DamageType,
  weakTypes: CharacterType[]
}

export interface Weapon extends GenericWeapon {
  type: WeaponType
}

export interface WeaponTypeInfos {
  type: WeaponType,
  name: string,
  strongAgainst: WeaponType,
  weakAgainst: WeaponType
}

export interface Shield extends GenericItem {
  physicalDefense: number,
  magicalDefense: number,
  critAvoid: number,
  weight: number
}

export interface Trinket extends GenericItem {
  physicalDefense: number,
  magicalDefense: number,
  physicalHit: number,
  magicalHit: number,
  physicalDamage: number,
  magicalDamage: number,
  physicalCrit: number,
  magicalCrit: number,
  critAvoid: number,
  weight: number
}

export interface WeaponsList { [s: string]: Weapon }
