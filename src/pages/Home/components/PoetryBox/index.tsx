import { Box, BoxProps, Paper, Typography } from "@mui/material"
// import { useAtom } from "jotai"
// import { dalleImageQueryAtom } from "src/state"
import { Stanza, Verse } from "src/state/poetries"
import { WordDropTarget } from "../WordDropTarget"
import { useAtomValue } from "jotai"
import { selectedPoetryAtom } from "src/state"

const VerseRender = ({ verse }: { verse: Verse }) => {
  return (
    <Typography
      variant="body1"
      textAlign="center"
      sx={{
        "& > span": {
          fontSize: "32px",
          padding: 1,
        },
      }}
    >
      {verse.map((word) =>
        typeof word === "number" ? (
          <WordDropTarget idx={word} />
        ) : (
          <span>{word} </span>
        )
      )}
    </Typography>
  )
}

const StanzaRender = ({ stanza }: { stanza: Stanza }) => {
  return (
    <Box>
      {stanza.map((verse) => (
        <VerseRender verse={verse} />
      ))}
    </Box>
  )
}

export default function PoetryBox(props: BoxProps) {
  const selectedPoetry = useAtomValue(selectedPoetryAtom)
  /*  const [dalleImageQuery, setDalleImageQuery] = useAtom(dalleImageQueryAtom)

  const handleQueryChange: React.ChangeEventHandler<HTMLInputElement> = (
    evt
  ) => {
    setDalleImageQuery(String(evt.target.value))
  } */

  if (!selectedPoetry) return <></>

  return (
    <Box
      {...props}
      component={Paper}
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      {selectedPoetry.stanzas.map((stanza) => (
        <StanzaRender stanza={stanza} />
      ))}
    </Box>
  )
}
