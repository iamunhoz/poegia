import { Box, Button } from "@mui/material"
import { useAtomValue } from "jotai"
import { selectedPoetryAtom } from "src/state"
import { Poetry, poetries, usePoetryActions } from "src/state/poetries"

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

  if (selectedPoetry) return <></>
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      border="2px solid green"
    >
      {poetries.map((poetry) => (
        <PoetryCardSelector poetry={poetry} key={poetry.id} />
      ))}
    </Box>
  )
}
