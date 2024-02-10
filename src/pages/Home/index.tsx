import { Box } from "@mui/material"
import { ImageFrame } from "./components"
import { PoetrySelector } from "./components/PoetrySelector"
import { PoetryMaker } from "./components/PoetryMaker"
import { useAtomValue } from "jotai"
import { gameStepAtom } from "src/state"
import GameStartScreen from "./components/GameStartScreen"

const GameStage = () => {
  const gameStep = useAtomValue(gameStepAtom)
  switch (gameStep) {
    case "poetry-selection":
      return <PoetrySelector />
    case "poetry-making":
      return <PoetryMaker />
    case "poetry-image-result":
      return <ImageFrame />
    default:
      return <GameStartScreen />
  }
}

export default function Home() {
  return (
    <Box display="flex" height="100%" gap={2} p={2}>
      <GameStage />
    </Box>
  )
}
