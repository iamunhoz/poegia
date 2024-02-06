import { Box } from "@mui/material"
import { ImageFrame, PoetryBox, Wordbank } from "./components"
import { DndProvider } from "react-dnd"
import { HTML5Backend } from "react-dnd-html5-backend"

export default function Home() {
  return (
    <Box display="flex" height="100%" gap={2} p={2}>
      <DndProvider backend={HTML5Backend}>
        <Box display="flex" flexDirection="column" flex={1} gap={2}>
          <PoetryBox flex={3} />
          <Wordbank flex={1} />
        </Box>
      </DndProvider>
      {/* <ImageFrame flex={2} /> */}
    </Box>
  )
}
