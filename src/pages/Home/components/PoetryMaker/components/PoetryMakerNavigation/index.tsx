import { Box, IconButton } from "@mui/material"
import { useSetAtom } from "jotai"
import RobinArrowLeftBold from "src/lib/assets/RobinArrowLeftBold.svg"
import RobinArrowRightBold from "src/lib/assets/RobinArrowRightBold.svg"
import { gameStepAtom } from "src/state"

export function PoetryMakerNavigation(): JSX.Element {
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
        "& > button:hover": {
          filter: "brightness(120%)",
        },
      }}
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
