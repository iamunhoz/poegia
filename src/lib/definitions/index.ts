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
  body: Stanza[]
  fillers: string[]
}

export enum EDragTypes {
  word = "word",
}

export enum ApiPaths {
  poetries = "poetries",
}

export type TGameStep =
  | "game-start"
  | "poetry-selection"
  | "poetry-making"
  | "poetry-image-result"

export enum AppColors {
  red = "#ff595e",
  yellow = "#ffca3a",
  green = "#8ac926",
  blue = "#1982c4",
  purple = "#6a4c93",
}
