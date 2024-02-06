import { useAtom } from "jotai"
import { selectedPoetryAtom } from "."

type Verse = (string | "FILLER")[]
type Stanza = Verse[]
type Poetry = {
  id: string | number
  title: string
  stanzas: Stanza[]
  fillers: string[]
}

// prettier-ignore
const poesia1: Poetry = {
  id: 'lucas-um',
  title: "A poesia é",
  stanzas: [
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

// prettier-ignore
const poesia2: Poetry = {
  id: 'iva-um',
  title: "Os cavalos",
  stanzas: [
    [
      ["Um", "cavalo", "era", "FILLER"],
      ["Mas", "FILLER", "é", "azul"],
    ],
    [
      ["Qualquer", "FILLER", "que", "FILLER", ", paciência"],
      ["FILLER", 'vive', 'mais']
    ],
  ],
  fillers: ['luxo', 'salão de baile', 'pássaro', 'desidratar', 'jacaré']
}

const poetries: Poetry[] = [poesia1, poesia2]

export { poetries }

export type { Verse, Stanza, Poetry }

export enum EDragTypes {
  word = "word",
}

export function usePoetryActions() {
  const [selectedPoetry, setSelectedPoetry] = useAtom(selectedPoetryAtom)

  const addNewPoetry = (poetry: Poetry) => {
    setSelectedPoetry(poetry)
  }

  const stringfySelectedPoetry = () => {
    return JSON.stringify(selectedPoetry)
  }

  return {
    addNewPoetry,
    stringfySelectedPoetry,
  }
}
