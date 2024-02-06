type Verse = (string | "FILLER")[]
type Stanza = Verse[]
type Poetry = Stanza[]

const poesia1: Poetry = [
  [
    ["A", "poesia", "é", "nativa"],
    ["A", "poesia", "é", "FILLER"],
  ],
  [["É", "um", "fogo", "sem", "controle"], ["FILLER"]],
]

export { poesia1 }

export type { Verse, Stanza, Poetry }

export enum EDragTypes {
  word = "word",
}
