import { Box } from "@mui/material"
import { useQuery } from "@tanstack/react-query"
import { useSetAtom } from "jotai"
import { ButtonMarioStyle } from "src/components/ButtonMarioStyle"
import { get } from "src/lib/api/poegia-backend"
import { ApiPaths, AppColors, Poetry } from "src/lib/definitions"
import { gameStepAtom } from "src/state"

export default function GameStartScreen() {
  const setGameStep = useSetAtom(gameStepAtom)

  return (
    <>
      <Box
        width="100%"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <ButtonMarioStyle
          bgcolor={AppColors.green}
          label="Iniciar"
          sx={{ fontSize: 96, textTransform: "uppercase", pl: 6, pr: 6 }}
          onClick={() => {
            setGameStep("poetry-selection")
          }}
        />
      </Box>
      <LoadPoetries />
    </>
  )
}

function LoadPoetries() {
  useQuery({
    queryKey: [ApiPaths.poetries],
    queryFn: async () => {
      return await get<Poetry[]>(ApiPaths.poetries)
    },
  })

  return <></>
}
