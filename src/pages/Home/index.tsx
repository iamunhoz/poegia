import { Box } from "@mui/material"
import { ImageFrame } from "./components"
import { PoetrySelector } from "./components/PoetrySelector"
import { PoetryMaker } from "./components/PoetryMaker"

export default function Home() {
  return (
    <Box display="flex" height="100%" gap={2} p={2}>
      <PoetrySelector />
      <PoetryMaker />
      <ImageFrame flex={2} />
    </Box>
  )
}
