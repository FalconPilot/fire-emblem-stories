import { WeaponType } from './items'

export type DamageType
  = 'magical'
  | 'physical'

export interface RawBattleStats {
  weaponType: WeaponType,
  dmg: number,
  hit: number,
  avoid: number,
  crit: number,
  actionSpeed: number,
  critAvoid: number,
  physicalDefense: number,
  magicalDefense: number
}

export interface BattleStats extends RawBattleStats {}
