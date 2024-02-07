import { Box, BoxProps, Paper } from "@mui/material"
import { WordDropOrigin } from "../WordDropOrigin"
import { useAtomValue } from "jotai"
import { selectedPoetryAtom } from "src/state"

export default function WordBank(props: BoxProps) {
  const selectedPoetry = useAtomValue(selectedPoetryAtom)

  if (!selectedPoetry) return <></>

  return (
    <Box {...props} component={Paper} display="flex" alignItems="start" gap={1}>
      {selectedPoetry.fillers.map((filler) => (
        <WordDropOrigin filler={filler} key={filler} />
      ))}
    </Box>
  )
}
