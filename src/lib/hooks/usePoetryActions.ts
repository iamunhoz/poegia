import { useAtom } from "jotai"
import {
  gameStepAtom,
  selectedPhrasesAtom,
  selectedPoetryAtom,
} from "src/state"
import { IselectedPhrases, Poetry } from "../definitions"

const stringfyPoetry = (poetry: Poetry, answers: IselectedPhrases) => {
  let stringfiedPoetry = ""

  poetry.body.forEach((stanza) => {
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
  const [, setGameStep] = useAtom(gameStepAtom)

  const addNewPoetry = (poetry: Poetry) => {
    setSelectedPoetry(poetry)
    setGameStep("poetry-making")
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
