import { Box, BoxProps, Input, Paper, Typography } from "@mui/material"
import { useAtom } from "jotai"
import { dalleImageQueryAtom } from "src/state"
import { Stanza, Verse, poesia1 } from "src/state/poetries"

const VerseRender = ({ verse }: { verse: Verse }) => {
  return (
    <Typography variant="body1" textAlign="center">
      {verse.map((word) =>
        word === "FILLER" ? <Input /> : <span>{word} </span>
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
  const [dalleImageQuery, setDalleImageQuery] = useAtom(dalleImageQueryAtom)

  const handleQueryChange: React.ChangeEventHandler<HTMLInputElement> = (
    evt
  ) => {
    setDalleImageQuery(String(evt.target.value))
  }

  return (
    <Box
      {...props}
      component={Paper}
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      {poesia1.map((stanza) => (
        <StanzaRender stanza={stanza} />
      ))}
    </Box>
  )
}
