import { Box, BoxProps, Button, CircularProgress, Paper } from "@mui/material"
import { useAtom } from "jotai"
import { dalleImageURLAtom } from "src/state"
import { openaiImageQuery } from "src/api"
import { useState } from "react"
import { usePoetryActions } from "src/state/poetries"

const dalleQueryText = (stringfiedPoetry: string) => {
  return `The following text in single quotes is a poetry: '${stringfiedPoetry}'. Please, draw an image that reflects the idea of the poetry. The picture must be suited for children. In the picture, use only the words of the poetry in this request, no other words.`
}

export default function ImageFrame(props: BoxProps) {
  const { stringfySelectedPoetry } = usePoetryActions()
  const [isLoading, setIsLoading] = useState(false)
  const [dalleImageURL, setDalleImageURL] = useAtom(dalleImageURLAtom)

  const handleGerar = async () => {
    setIsLoading(true)
    const imageURL = await openaiImageQuery(
      dalleQueryText(stringfySelectedPoetry())
    )
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
