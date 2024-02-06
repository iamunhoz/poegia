import { Box } from "@mui/material"
import { useState } from "react"
import { useDrop } from "react-dnd"
import { EDragTypes } from "src/state/poetries"

type TItem = {
  filler: string | number
}

export function WordDropTarget(): JSX.Element {
  const [wordLabel, setWordLabel] = useState("")
  const [, /* { isOver } */ dropRef] = useDrop(() => ({
    accept: EDragTypes.word,
    // o arg 'item' é um payload gerado no hook useDrag do cpte arrastável
    drop: (item: TItem) => {
      setWordLabel(String(item.filler))
    },
  }))

  return (
    <Box
      component="span"
      ref={dropRef}
      sx={{
        border: "2px solid orange",
        borderRadius: "4px",
        minWidth: "160px",
        minHeight: "40px",
        display: "inline-block",
        transform: "translateY(10px)",
      }}
    >
      {wordLabel}
    </Box>
  )
}
