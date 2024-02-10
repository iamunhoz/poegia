import { Box } from "@mui/material"
import { useState } from "react"
import { useDrop } from "react-dnd"
import { AppColors, EDragTypes } from "src/lib/definitions"
import { usePoetryActions } from "src/lib/hooks/usePoetryActions"

type TItem = {
  filler: string | number
}

export function WordDropTarget({ idx }: { idx: number }): JSX.Element {
  const { selectPhrase } = usePoetryActions()
  // const [isBeingDragHovered, setIsBeingDragHovered] = useState(false)
  const [wordLabel, setWordLabel] = useState("")
  const [{ isHovered, canDrop }, dropRef] = useDrop(() => {
    let isHovered = false
    return {
      accept: EDragTypes.word,
      hover() {
        isHovered = true
      },
      // fn canDrop retorna um boolean, que é refletido no monitor.canDrop
      canDrop: () => !wordLabel,
      // o arg 'item' é um payload gerado no hook useDrag do cpte arrastável
      drop: (item: TItem) => {
        setWordLabel(String(item.filler))
        selectPhrase(idx, String(item.filler))
        isHovered = false
      },
      collect(monitor) {
        return {
          isHovered,
          canDrop: !!monitor.canDrop(),
        }
      },
    }
  })

  return (
    <Box
      component="span"
      ref={dropRef}
      sx={{
        borderRadius: "4px",
        minWidth: "160px",
        minHeight: "40px",
        maxHeight: "50px",
        display: "inline-flex",
        justifyContent: "center",
        alignItems: "center",
        transform: "translateY(0)",

        "&:before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          border:
            isHovered && canDrop
              ? `6px dashed ${AppColors.yellow}`
              : "4px dashed #dcdcdc",

          boxSizing: "border-box",
        },

        /* "&:hover": {
          border: `6px dashed ${AppColors.yellow}`,
        }, */
      }}
    >
      {wordLabel}
    </Box>
  )
}
