import { Box, Button } from "@mui/material"
import { useState } from "react"
import { openaiImageEdit } from "src/lib/api/openAI"
import { get } from "src/lib/api/poegia-backend"
import { Poetry } from "src/lib/definitions"

export default function Tests() {
  const [poetries, setPoetries] = useState<Poetry[]>([])
  const getPoetries = async () => {
    const apiRes = await get<Poetry[]>("poetries")
    setPoetries(apiRes)
  }

  return (
    <Box
      sx={{
        height: "80%",
        margin: 5,
        backgroundColor: "rgba(0,0,0,0.3)",
        borderRadius: "5px",

        "& button": {
          fontSize: "92px",
        },
      }}
    >
      <Button onClick={getPoetries} variant="contained">
        GET Poetries
      </Button>
      <Button onClick={openaiImageEdit} variant="contained">
        edit image
      </Button>
      <pre>{JSON.stringify(poetries)}</pre>
    </Box>
  )
}
