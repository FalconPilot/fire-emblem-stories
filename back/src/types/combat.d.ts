export type DamageType
  = 'magical'
  | 'physical'

export interface BattleStats {
  dmg: number,
  hit: number,
  avoid: number,
  crit: number,
  actionSpeed: number,
  critAvoid: number,
  physicalDefense: number,
  magicalDefense: number
}
