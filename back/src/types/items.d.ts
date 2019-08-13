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

export interface Weapon {
  name: string,
  dmg: number,
  hit: number,
  crit: number,
  minRange: number,
  maxRange: number,
  weight: number,
  level: SkillLevel,
  maxDurability: number
}

export interface WeaponsList { [s: string]: Weapon }
