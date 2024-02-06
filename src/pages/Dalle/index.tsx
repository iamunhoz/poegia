import { Box, Input } from "@mui/material"
import { ImageFrame } from "../Home/components"
import { useAtom } from "jotai"
import { dalleImageQueryAtom } from "src/state"

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
