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
      // sx={{ border: "5px solid orange" }}
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        {...props}
        component={Paper}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        {dalleImageURL && <img src={dalleImageURL} alt={dalleImageURL} />}
      </Box>
      <Button
        onClick={handleGerar}
        variant="contained"
        disabled={isLoading}
        sx={{
          fontSize: 50,
        }}
      >
        {isLoading ? <CircularProgress /> : "Gerar"}
      </Button>
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
        backgroundColor: "rgba(0,0,0,0.5)",
        margin: "100px 20px 10px",
        p: 1,
        // border: "2px solid orange",
      }}
    >
      <Paper sx={{ padding: 4, m: 4 }}>
        <Input
          value={dalleImageQuery}
          onChange={handleQueryChange}
          sx={{
            width: "80svw",
            marginLeft: 20,
          }}
        />
      </Paper>
      <ImageFrame />
    </Box>
  )
}
