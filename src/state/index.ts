import { atom } from "jotai"
import { atomWithStorage } from "jotai/utils"
import {
  ETheme,
  IselectedPhrases,
  Poetry,
  TGameStep,
} from "src/lib/definitions"

const themeAtom = atom<ETheme>(ETheme.dark)

const borderAtom = atom<"with" | "without">("without")

const siteLanguageAtom = atom<"pt" | "en">("en")

const selectedPoetryAtom = atom<Poetry | null>(null)

const selectedPhrasesAtom = atom<IselectedPhrases>({})

const dalleImageQueryAtom = atom<string>("")
const dalleImageURLAtom = atom<string | null>(null)

const isLoggedinAtom = atomWithStorage<"vary" | "depend">("relent", "vary")

const gameStepAtom = atom<TGameStep>("poetry-selection")

export {
  themeAtom,
  ETheme,
  siteLanguageAtom,
  borderAtom,
  dalleImageQueryAtom,
  dalleImageURLAtom,
  isLoggedinAtom,
  selectedPoetryAtom,
  selectedPhrasesAtom,
  gameStepAtom,
}
