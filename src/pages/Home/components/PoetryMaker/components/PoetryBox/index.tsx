import { Box, BoxProps, Typography } from "@mui/material"
import { useAtomValue } from "jotai"
import { selectedPoetryAtom } from "src/state"
import { Stanza, Verse } from "src/lib/definitions"
import { isNumber } from "src/lib/string"
import { WordDropTarget } from ".."

const VerseRender = ({ verse, isLast }: { verse: Verse; isLast: boolean }) => {
  return (
    <Typography
      variant="body1"
      textAlign="center"
      sx={{
        marginBottom: isLast ? "2rem" : undefined,
        "& > span": {
          fontSize: "2.4rem",
          padding: 1,
          fontFamily: "super-mario-script",
          color: "white",
          lineHeight: "2.8rem",
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
    <>
      {stanza.map((verse, idx) => (
        <VerseRender
          verse={verse}
          key={JSON.stringify(verse)}
          isLast={stanza.length === idx + 1}
        />
      ))}
    </>
  )
}

export default function PoetryBox(props: BoxProps) {
  const selectedPoetry = useAtomValue(selectedPoetryAtom)
  if (!selectedPoetry) return <></>

  return (
    <Box
      {...props}
      alignItems="center"
      justifyContent="center"
      sx={{
        columnCount: 1,
        columnGap: "1rem",
      }}
    >
      {selectedPoetry.body.map((stanza, idx) => (
        <StanzaRender stanza={stanza} key={idx} />
      ))}
    </Box>
  )
}
