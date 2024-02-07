import { Button } from "@mui/material"
import { useState } from "react"
import { get } from "src/lib/api/poegia-backend"
import { Poetry } from "src/lib/definitions"

export default function Tests() {
  const [poetries, setPoetries] = useState<Poetry[]>([])
  const getPoetries = async () => {
    const apiRes = await get<Poetry[]>("poetries")
    setPoetries(apiRes)
  }

  return (
    <div>
      <Button onClick={getPoetries}>GET Poetries</Button>
      <pre>{JSON.stringify(poetries)}</pre>
    </div>
  )
}
