import { Box } from "@mui/material"
import { useDrag } from "react-dnd"
import { AppColors, EDragTypes } from "src/lib/definitions"

type WordDropOriginProps = {
  filler: string
  bgcolor: AppColors
  outlined?: boolean
}
export function WordDropOrigin(props: WordDropOriginProps): JSX.Element {
  const { filler, bgcolor, outlined } = props
  const [{ isDragging }, dragRef] = useDrag(() => ({
    type: EDragTypes.word,
    item: { filler }, // aqui que é criado o payload que chega ao target
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }))
  return (
    <Box
      ref={dragRef}
      sx={{
        opacity: isDragging ? 0.5 : 1,
        backgroundColor: bgcolor,
        flex: 1,
        userSelect: "none",
        fontFamily: "paper-mario",
        color: "white",
        fontSize: "36px",
        borderRight: "5px solid rgba(0,0,0,0.7)",
        borderBottom: "5px solid rgba(0,0,0,0.7)",
        boxShadow: "5px 5px 0 0 rgba(0, 0, 0, 0.5)",
        textShadow: outlined
          ? "0 5px rgba(0,0,0,0.7), 5px 0 rgba(0,0,0,0.7)"
          : undefined,

        "&:hover": {
          backgroundColor: bgcolor,
          transform: "scale(1.1)",
        },
        textAlign: "center",
      }}
    >
      {filler}
    </Box>
  )
}
