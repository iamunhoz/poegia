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
    if (imageURL) {
      setDalleImageURL(imageURL.toString())
      // const result = await fetch(imageURL, { mode: "no-cors" })
      // console.log("result", result.body)
    }
    setIsLoading(false)
  }

  return (
    <Box
      {...props}
      component={Paper}
      display="flex"
      width="100%"
      justifyContent="center"
      alignItems="center"
    >
      {dalleImageURL ? (
        <img src={dalleImageURL} alt={dalleImageURL} />
      ) : (
        <Button
          onClick={handleGerar}
          disabled={isLoading}
          variant="contained"
          sx={{
            width: "100px",
            height: "50px",
            fontSize: "34px",
          }}
        >
          {isLoading ? <CircularProgress /> : "Gerar"}
        </Button>
      )}
    </Box>
  )
}
