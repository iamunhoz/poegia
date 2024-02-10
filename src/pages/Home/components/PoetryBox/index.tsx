import { Box, BoxProps, Typography } from "@mui/material"
import { WordDropTarget } from "../WordDropTarget"
import { useAtomValue } from "jotai"
import { selectedPoetryAtom } from "src/state"
import { Stanza, Verse } from "src/lib/definitions"
import { isNumber } from "src/lib/string"

const VerseRender = ({ verse }: { verse: Verse }) => {
  return (
    <Typography
      variant="body1"
      textAlign="center"
      sx={{
        "& > span": {
          fontSize: "32px",
          padding: 1,
          fontFamily: "super-mario-script",
          color: "white",
          lineHeight: "54px",
        },
      }}
    >
      {verse.map((word) =>
        isNumber(word) ? (
          <WordDropTarget idx={word as number} key={word} />
        ) : (
          <span key={word}>{word} </span>
        )
      )}
    </Typography>
  )
}

const StanzaRender = ({ stanza }: { stanza: Stanza }) => {
  return (
    <Box>
      {stanza.map((verse) => (
        <VerseRender verse={verse} key={JSON.stringify(verse)} />
      ))}
    </Box>
  )
}

export default function PoetryBox(props: BoxProps) {
  const selectedPoetry = useAtomValue(selectedPoetryAtom)
  if (!selectedPoetry) return <></>

  return (
    <Box
      {...props}
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      {selectedPoetry.body.map((stanza, idx) => (
        <StanzaRender stanza={stanza} key={idx} />
      ))}
    </Box>
  )
}
