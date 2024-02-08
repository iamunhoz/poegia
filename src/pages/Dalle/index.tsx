import {
  Box,
  BoxProps,
  Button,
  CircularProgress,
  Input,
  Paper,
} from "@mui/material"
import { useAtom } from "jotai"
import { useState } from "react"
import { openaiImageQuery } from "src/lib/api/openAI"
import { dalleImageQueryAtom, dalleImageURLAtom } from "src/state"

function ImageFrame(props: BoxProps) {
  const [dalleImageQuery] = useAtom(dalleImageQueryAtom)

  const [isLoading, setIsLoading] = useState(false)
  const [dalleImageURL, setDalleImageURL] = useAtom(dalleImageURLAtom)

  const handleGerar = async () => {
    setIsLoading(true)
    setDalleImageURL("")

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
      {dalleImageURL && <img src={dalleImageURL} alt={dalleImageURL} />} (
      <Button onClick={handleGerar} disabled={isLoading}>
        {isLoading ? <CircularProgress /> : "Gerar"}
      </Button>
      )
    </Box>
  )
}

export function Dalle(): JSX.Element {
  const [dalleImageQuery, setDalleImageQuery] = useAtom(dalleImageQueryAtom)

  const handleQueryChange: React.ChangeEventHandler<HTMLInputElement> = (
    evt
  ) => {
    setDalleImageQuery(String(evt.target.value))
  }
  return (
    <Box
      sx={{
        height: "80svh",
        // border: "2px solid orange",
      }}
    >
      <Input
        value={dalleImageQuery}
        onChange={handleQueryChange}
        sx={{
          width: "80svw",
          marginLeft: 20,
        }}
      />
      <ImageFrame />
    </Box>
  )
}
