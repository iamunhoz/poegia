type Verse = (string | "FILLER")[]
type Stanza = Verse[]
type Poetry = {
  stanzas: Stanza[]
  fillers: string[]
}

// prettier-ignore
const poesia1: Poetry = {stanzas: [
  [
    ["A", "poesia", "é", "nativa"],
    ["A", "poesia", "é", "FILLER"],
  ],
  [
    ["É", "um", "fogo", "sem", "controle"],
    ["FILLER"]
],
],
  fillers: ['sativa', 'só bole']
}

export { poesia1 }

export type { Verse, Stanza, Poetry }

export enum EDragTypes {
  word = "word",
}
