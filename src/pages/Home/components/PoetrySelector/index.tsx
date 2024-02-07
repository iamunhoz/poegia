import { Box, Button } from "@mui/material"
import { useQuery } from "@tanstack/react-query"
import { useAtomValue } from "jotai"
import { get } from "src/lib/api/poegia-backend"
import { Poetry, ApiPaths } from "src/lib/definitions"
import { usePoetryActions } from "src/lib/hooks/usePoetryActions"
import { selectedPoetryAtom } from "src/state"

function PoetryCardSelector({ poetry }: { poetry: Poetry }) {
  const { addNewPoetry } = usePoetryActions()
  return (
    <Button
      onClick={() => {
        addNewPoetry(poetry)
      }}
      sx={{
        border: "2px solid lightblue",
        margin: 2,
      }}
    >
      {poetry.title}
    </Button>
  )
}

export function PoetrySelector(): JSX.Element {
  const selectedPoetry = useAtomValue(selectedPoetryAtom)
  const { data, isLoading, isError } = useQuery({
    queryKey: [ApiPaths.poetries],
    queryFn: async () => {
      return await get<Poetry[]>(ApiPaths.poetries)
    },
  })

  if (selectedPoetry) return <></>
  if (isLoading) return <>loading</>
  if (isError) return <>errors</>

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      border="2px solid green"
    >
      {data &&
        data.map((poetry) => (
          <PoetryCardSelector poetry={poetry} key={poetry.id} />
        ))}
    </Box>
  )
}
