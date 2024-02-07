import { useAtom } from "jotai"
import { IselectedPhrases, selectedPhrasesAtom, selectedPoetryAtom } from "."

type Verse = (string | number)[]
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
      ["A", "poesia", "é", 0],
    ],
    [
      ["É", "um", "fogo", "sem", "controle"],
      [1]
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
      ["Um", "cavalo", "era", 0],
      ["Mas", 1, "é", "azul"],
    ],
    [
      ["Qualquer", 2, "que", 3, ", paciência"],
      [4, 'vive', 'mais']
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

const stringfyPoetry = (poetry: Poetry, answers: IselectedPhrases) => {
  let stringfiedPoetry = ""

  poetry.stanzas.forEach((stanza) => {
    stanza.forEach((verse) => {
      verse.forEach((word) => {
        if (typeof word === "string") {
          stringfiedPoetry += word
        } else {
          stringfiedPoetry += answers[String(word)]
        }
        stringfiedPoetry += " "
      })
      stringfiedPoetry += "\n "
    })
  })

  return stringfiedPoetry
}

const dalleQueryText = (stringfiedPoetry: string) => {
  return `The following text in single quotes is a poetry: '${stringfiedPoetry}'. Please, draw an image that reflects the idea of the poetry. The picture must be suited for children. In the picture, use only the words of the poetry in this request, no other words.`
}

export function usePoetryActions() {
  const [selectedPoetry, setSelectedPoetry] = useAtom(selectedPoetryAtom)
  const [selectedPhrases, setSelectedPhrases] = useAtom(selectedPhrasesAtom)

  const addNewPoetry = (poetry: Poetry) => {
    setSelectedPoetry(poetry)
  }

  const selectPhrase = (idx: number, phrase: string) => {
    setSelectedPhrases((prev) => ({
      ...prev,
      [idx]: phrase,
    }))
  }

  const generateDalleQuery = () => {
    if (!selectedPoetry) return ""
    return dalleQueryText(stringfyPoetry(selectedPoetry, selectedPhrases))
  }

  return {
    addNewPoetry,
    generateDalleQuery,
    selectPhrase,
  }
}
