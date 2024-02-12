import { atom } from "jotai"
import { IselectedPhrases, Poetry, TGameStep } from "src/lib/definitions"

const selectedPoetryAtom = atom<Poetry | null>(null)

const selectedPhrasesAtom = atom<IselectedPhrases>({})

const dalleImageQueryAtom = atom<string>("")
const dalleImageURLAtom = atom<string | null>(null)

const gameStepAtom = atom<TGameStep>("game-start")

export {
  dalleImageQueryAtom,
  dalleImageURLAtom,
  selectedPoetryAtom,
  selectedPhrasesAtom,
  gameStepAtom,
}
