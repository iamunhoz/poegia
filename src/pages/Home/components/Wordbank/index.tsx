import { Box, BoxProps, Paper } from "@mui/material"
import { poesia1 } from "src/state/poetries"
import { WordDropOrigin } from "../WordDropOrigin"

export default function WordBank(props: BoxProps) {
  return (
    <Box {...props} component={Paper} display="flex" alignItems="start" gap={1}>
      {poesia1.fillers.map((filler) => (
        <WordDropOrigin filler={filler} />
      ))}
    </Box>
  )
}
