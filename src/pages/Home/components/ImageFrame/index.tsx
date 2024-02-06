import { Box, BoxProps, Button, CircularProgress, Paper } from "@mui/material"
import { useAtom, useAtomValue } from "jotai"
import { dalleImageQueryAtom, dalleImageURLAtom } from "src/state"
import { openaiImageQuery } from "src/api"
import { useState } from "react"

export default function ImageFrame(props: BoxProps) {
  const [dalleImageQuery] = useAtom(dalleImageQueryAtom)
  const [isLoading, setIsLoading] = useState(false)
  const [, setDalleImageURL] = useAtom(dalleImageURLAtom)

  const dalleImageURL = useAtomValue(dalleImageURLAtom)

  const handleGerar = async () => {
    setIsLoading(true)
    const imageURL = await openaiImageQuery(dalleImageQuery)
    setIsLoading(false)

    setDalleImageURL(imageURL)
  }

  return (
    <Box
      {...props}
      component={Paper}
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      {dalleImageURL ? (
        <img src={dalleImageURL} alt={dalleImageURL} />
      ) : isLoading ? (
        <CircularProgress />
      ) : (
        <Button onClick={handleGerar}>Gerar</Button>
      )}
    </Box>
  )
}
