import { Box, Button, CircularProgress, Typography } from "@mui/material"
import { useQuery } from "@tanstack/react-query"
import { useAtomValue } from "jotai"
import { GreenBoard } from "src/components/GreenBoard"
import { get } from "src/lib/api/poegia-backend"
import { Poetry, ApiPaths, AppColors } from "src/lib/definitions"
import { usePoetryActions } from "src/lib/hooks/usePoetryActions"
import { selectedPoetryAtom } from "src/state"

const _getRandomColor = () => {
  let idx = 0
  const colors = [
    AppColors.red,
    AppColors.yellow,
    AppColors.blue,
    AppColors.green,
    AppColors.purple,
  ]

  return () => {
    if (idx > 4) {
      idx = 0
    }
    return colors[idx++]
  }
}

const getRandomColor = _getRandomColor()

function PoetrySelectorTitle() {
  return (
    <Typography
      variant="h2"
      fontFamily="paper-mario"
      sx={{
        textShadow: "0 5px rgba(0,0,0,0.7), 5px 0 rgba(0,0,0,0.7)",
        fontSize: "96px",
      }}
    >
      {"Escolha uma poesia".split("").map((char) => (
        <span
          key={char}
          style={{
            color: getRandomColor(),
            borderRadius: "10px",
            display: "inline",
            textAlign: "center",
            height: "90px",
            marginRight: "5px",
          }}
        >
          {char}
        </span>
      ))}
    </Typography>
  )
}

function PoetryCardSelector({ poetry }: { poetry: Poetry }) {
  const { addNewPoetry } = usePoetryActions()
  return (
    <Button
      onClick={() => {
        addNewPoetry(poetry)
      }}
      sx={{
        margin: 2,
        p: 4,
        color: "white",
        fontFamily: "super-mario-script",
        border: "4px dashed #dcdcdc",
        fontSize: "32px",

        "&:hover": {
          backgroundColor: "rgba(255,255,255,0.2)",
        },
      }}
    >
      {poetry.title}
    </Button>
  )
}

function AsyncPoetryCards() {
  const selectedPoetry = useAtomValue(selectedPoetryAtom)
  const { data, isLoading, isError } = useQuery({
    queryKey: [ApiPaths.poetries],
    queryFn: async () => {
      return await get<Poetry[]>(ApiPaths.poetries)
    },
  })

  if (selectedPoetry) return <></>
  if (isLoading) return <CircularProgress />
  if (isError) return <>errors</>

  return (
    <Box
      display="grid"
      gridTemplateColumns="repeat(auto-fill, minmax(400px, 1fr))"
      justifyContent="center"
      alignItems="start"
      mt={6}
    >
      {data &&
        data.map((poetry) => (
          <PoetryCardSelector poetry={poetry} key={poetry.id} />
        ))}
    </Box>
  )
}

export function PoetrySelector(): JSX.Element {
  return (
    <GreenBoard
      sx={{
        width: "100%",
      }}
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <PoetrySelectorTitle />
      <AsyncPoetryCards />
    </GreenBoard>
  )
}
