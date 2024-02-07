export enum ETheme {
  dark = "dark",
  light = "light",
}

export interface IselectedPhrases {
  [key: string]: string
}

export type Verse = (string | number)[]
export type Stanza = Verse[]
export type Poetry = {
  id: string | number
  title: string
  stanzas: Stanza[]
  fillers: string[]
}

export enum EDragTypes {
  word = "word",
}
