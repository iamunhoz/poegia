import { Box, BoxProps, IconButton } from "@mui/material"
import { useSetAtom } from "jotai"
import RobinArrowLeftBold from "src/lib/assets/RobinArrowLeftBold.svg"
import RobinArrowRightBold from "src/lib/assets/RobinArrowRightBold.svg"
import { gameStepAtom } from "src/state"

export function PoetryMakerNavigation(props: BoxProps): JSX.Element {
  const { sx } = props
  const setGameStep = useSetAtom(gameStepAtom)

  const goBackToPoetrySelector = () => {
    setGameStep("poetry-selection")
  }

  const goToPoetryImageResut = () => {
    setGameStep("poetry-image-result")
  }

  return (
    <Box
      display="flex"
      justifyContent="center"
      gap={4}
      sx={{
        "& > button": {
          width: "4.8rem !important",
          height: "4.8rem",

          "& > img": {
            width: "4.8rem !important",
            height: "4.8rem",
          },
          "&:hover": {
            filter: "brightness(120%)",
          },
        },
        ...sx,
      }}
      {...props}
    >
      <IconButton onClick={goBackToPoetrySelector}>
        <img src={RobinArrowLeftBold} />
      </IconButton>
      <IconButton onClick={goToPoetryImageResut}>
        <img src={RobinArrowRightBold} />
      </IconButton>
    </Box>
  )
}
