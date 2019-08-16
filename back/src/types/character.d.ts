import { User } from './user'
import { Weapon, Shield, Trinket } from './items'

export type CharacterClassCategory
  = 'special'
  | 'novice'
  | 'advanced'
  | 'elite'
  | 'supreme'

export type CharacterType
  = 'flying'
  | 'armored'
  | 'monster'

export interface CharacterClass {
  grade: CharacterClassCategory,
  name: string,
  usesMagic: boolean,
  type: CharacterType
}

export interface CharacterStats {
  hp: number,
  str: number,
  mag: number,
  dex: number,
  spd: number,
  lck: number,
  def: number,
  res: number,
  cha: number
}

export interface Inventory {
  weapons: Weapon[],
  shields: Shield[],
  trinkets: Trinket[]
}

export interface Character {
  user: User,
  name: string,
  level: number,
  class: CharacterClass,
  stats: CharacterStats,
  inventory: Inventory
}
