import { TMatch } from "./Match"

export interface TTeams {
  _id: string
  name_en: string
  name_fa: string
  flag: string
  fifa_code: string
  iso2: string
  groups: string
  id: string
}

export interface TGroups {
  name: string
  teams?: TTeams[]
  maths?: TMatch[]
  flags?: string[]
}