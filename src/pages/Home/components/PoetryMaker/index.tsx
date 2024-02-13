// import { Box } from "@mui/material"
import { DndProvider } from "react-dnd"
import { HTML5Backend } from "react-dnd-html5-backend"
import { TouchBackend } from "react-dnd-touch-backend"
import { isMobile } from "src/lib/environment"
import { GreenBoard } from "src/components/GreenBoard"
import PoetryBox from "./components/PoetryBox"
import WordBank from "./components/Wordbank"
import { PoetryMakerNavigation } from "./components"

export function PoetryMaker(): JSX.Element {
  return (
    <DndProvider backend={isMobile() ? TouchBackend : HTML5Backend}>
      <GreenBoard display="flex" flexDirection="column" flex={1} gap={2}>
        <PoetryBox flex={3} />
        <WordBank flex={1} />
        <PoetryMakerNavigation />
      </GreenBoard>
    </DndProvider>
  )
}
