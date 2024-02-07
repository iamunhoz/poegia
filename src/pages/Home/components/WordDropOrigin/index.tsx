import { Box } from "@mui/material"
import { useDrag } from "react-dnd"
import { EDragTypes } from "src/lib/definitions"

type WordDropOriginProps = {
  filler: string
}
export function WordDropOrigin(props: WordDropOriginProps): JSX.Element {
  const { filler } = props
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
        userSelect: "none",
        border: "2px solid lightblue",
        borderRadius: 1,
        padding: 1,
        opacity: isDragging ? 0.5 : 1,

        "&:hover": {
          cursor: "pointer",
          backgroundColor: "lightblue",
          backgroundBlendMode: "lighten",
        },
      }}
    >
      {filler}
    </Box>
  )
}
