import { Box, Button, TextField } from "@mui/material"
import { useMutation } from "@tanstack/react-query"
import { useState } from "react"
import { post } from "src/lib/api/poegia-backend"
import { ApiPaths, Poetry } from "src/lib/definitions"

const __getCounter = () => {
  let count = 0

  return () => count++
}

const getCounter = __getCounter()

const parseStringifiedPoetry = (str: string) => {
  return str.split("\n\n").map((stanza) =>
    stanza
      .trim()
      .split("\n")
      .map((verse) =>
        verse
          .trim()
          .split(" ")
          .map((word) => (word === "FILLER" ? getCounter() : word))
      )
  )
}

export function CreatePoetry(): JSX.Element {
  const [poetryRaw, setPoetryRaw] = useState(`
  No meio do caminho tinha uma FILLER
  tinha uma FILLER no meio do caminho
  tinha uma FILLER
  no meio do caminho tinha uma FILLER.

  Nunca me esquecerei desse acontecimento
  na vida de minhas retinas tão fatigadas.
  Nunca me esquecerei que no meio do caminho
  tinha uma FILLER
  tinha uma pedra no meio do caminho
  no meio do caminho tinha uma FILLER.
  `)

  const { mutate, isPending } = useMutation({
    mutationKey: [ApiPaths.poetries],
    mutationFn: async (poetry: Poetry) => {
      await post(ApiPaths.poetries, poetry)
    },
  })

  const handlePoetryChange: React.ChangeEventHandler<HTMLTextAreaElement> = (
    evt
  ) => {
    setPoetryRaw(evt.target.value)
  }

  const handleEnviar = () => {
    const body = parseStringifiedPoetry(poetryRaw)

    mutate({
      body,
      fillers: ["morango", "abacaxi", "cereja", "manga", "goiaba", "pitanga"],
      title: "poesia salada mista",
      id: "xxxxxx",
    })
  }

  return (
    <Box
      sx={{
        height: "100%",
        margin: 1,
      }}
      display="flex"
    >
      {" "}
      <TextField label="Titulo" />
      <TextField
        id="outlined-multiline-flexible"
        // label="Multiline"
        multiline
        minRows={20}
        sx={{
          width: "50%",
          "& *": {
            fontSize: "40px !important",
          },
        }}
        value={poetryRaw}
        onChange={handlePoetryChange}
      />
      <Box>
        <Button onClick={handleEnviar}>Enviar Poesia</Button>
        {isPending && <div>AGUARDE...</div>}
      </Box>
    </Box>
  )
}
