import { Box } from "@mui/material"
import { DndProvider } from "react-dnd"
import { HTML5Backend } from "react-dnd-html5-backend"
import { TouchBackend } from "react-dnd-touch-backend"
import { PoetryBox } from ".."
import WordBank from "../Wordbank"
import { isMobile } from "src/lib/environment"

export function PoetryMaker(): JSX.Element {
  return (
    <DndProvider backend={isMobile() ? TouchBackend : HTML5Backend}>
      <Box display="flex" flexDirection="column" flex={1} gap={2}>
        <PoetryBox flex={3} />
        <WordBank flex={1} />
      </Box>
    </DndProvider>
  )
}
