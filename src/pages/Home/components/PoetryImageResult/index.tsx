import { Box, BoxProps, Button, CircularProgress, Paper } from "@mui/material"
import { useAtom } from "jotai"
import { dalleImageURLAtom } from "src/state"
import { useState } from "react"
import { openaiImageQuery } from "src/lib/api/openAI"
import { usePoetryActions } from "src/lib/hooks/usePoetryActions"

export default function PoetryImageResult(props: BoxProps) {
  const { generateDalleQuery } = usePoetryActions()
  const [isLoading, setIsLoading] = useState(false)
  const [dalleImageURL, setDalleImageURL] = useAtom(dalleImageURLAtom)

  const handleGerar = async () => {
    setIsLoading(true)
    const imageURL = await openaiImageQuery(generateDalleQuery())
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
      ) : (
        <Button onClick={handleGerar} disabled={isLoading}>
          {isLoading ? <CircularProgress /> : "Gerar"}
        </Button>
      )}
    </Box>
  )
}
