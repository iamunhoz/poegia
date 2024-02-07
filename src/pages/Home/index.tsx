import { Box, Button } from "@mui/material"
import { ImageFrame, PoetryBox, Wordbank } from "./components"
import { DndProvider } from "react-dnd"
import { HTML5Backend } from "react-dnd-html5-backend"
import { PoetrySelector } from "./components/PoetrySelector"
import { usePoetryActions } from "src/state/poetries"

export default function Home() {
  const { stringfySelectedPoetry } = usePoetryActions()

  const handleGerar = () => {
    console.log({ stringfiedSelectedPoetry: stringfySelectedPoetry() })
  }

  return (
    <Box display="flex" height="100%" gap={2} p={2}>
      <PoetrySelector />

      <DndProvider backend={HTML5Backend}>
        <Box display="flex" flexDirection="column" flex={1} gap={2}>
          <PoetryBox flex={3} />
          <Button onClick={handleGerar} sx={{ display: "none" }}>
            Gerar
          </Button>
          <Wordbank flex={1} />
        </Box>
      </DndProvider>

      <ImageFrame flex={2} />
    </Box>
  )
}
