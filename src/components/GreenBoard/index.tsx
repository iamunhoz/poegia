import { Box, BoxProps } from "@mui/material"
import GreenBoardBg from "src/lib/assets/green-board-cropped.png"

export function GreenBoard(props: BoxProps): JSX.Element {
  const { children, sx, ...restProps } = props
  return (
    <Box
      {...restProps}
      sx={{
        ...sx,
        padding: "50px 100px",
        backgroundImage: `url(${GreenBoardBg})`,
        backgroundSize: "100% 100%",
      }}
    >
      {children}
    </Box>
  )
}
