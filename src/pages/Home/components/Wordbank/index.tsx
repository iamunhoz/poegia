import { Box, BoxProps } from "@mui/material"
import { WordDropOrigin } from "../WordDropOrigin"
import { useAtomValue } from "jotai"
import { selectedPoetryAtom } from "src/state"
import { getRandomColorClosure } from "src/lib/styles"

const getRandomColor = getRandomColorClosure()

export default function WordBank(props: BoxProps) {
  const selectedPoetry = useAtomValue(selectedPoetryAtom)

  if (!selectedPoetry) return <></>

  return (
    <Box
      {...props}
      display="flex"
      alignItems="start"
      gap={4}
      sx={{
        pl: 2,
        pr: 6,
      }}
    >
      {selectedPoetry.fillers.map((filler) => (
        <WordDropOrigin
          filler={filler}
          key={filler}
          bgcolor={getRandomColor()}
        />
      ))}
    </Box>
  )
}
