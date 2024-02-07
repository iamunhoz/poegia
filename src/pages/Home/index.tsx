import { Box, Button } from "@mui/material"
import { /* ImageFrame, */ PoetryBox, Wordbank } from "./components"
import { DndProvider } from "react-dnd"
import { HTML5Backend } from "react-dnd-html5-backend"
import { PoetrySelector } from "./components/PoetrySelector"
import { usePoetryActions } from "src/state/poetries"
import { useAtomValue } from "jotai"
import { selectedPhrasesAtom } from "src/state"

export default function Home() {
  const { stringfySelectedPoetry } = usePoetryActions()
  const selectedPhrases = useAtomValue(selectedPhrasesAtom)

  const handleGerar = () => {
    console.log({ stringfiedSelectedPoetry: stringfySelectedPoetry() })
  }

  return (
    <Box display="flex" height="100%" gap={2} p={2}>
      <h4>{JSON.stringify(selectedPhrases)}</h4>
      {/* seletor de poesias */}
      <PoetrySelector />

      {/* deve ser exibido quando houver uma poesia selecionada */}
      <DndProvider backend={HTML5Backend}>
        <Box display="flex" flexDirection="column" flex={1} gap={2}>
          <PoetryBox flex={3} />
          <Button onClick={handleGerar}>Gerar</Button>
          <Wordbank flex={1} />
        </Box>
      </DndProvider>

      {/* esse é exibido só quando o dall-e devolver a url da imagem gerada
        <ImageFrame flex={2} />
      */}
    </Box>
  )
}
