import { Box, Button, Paper, TextField } from "@mui/material"
import { useMutation } from "@tanstack/react-query"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
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
  const navigate = useNavigate()
  const [poetryRaw, setPoetryRaw] = useState(`
  Colocar aqui o corpo da poesia
  Cada linha vira um verso
  Colocar duas quebras de linha cria uma estrofe
  Colocar a palavra FILLER nas posições que esperam resposta
  Poesia de exemplo:

  No meio do caminho tinha uma FILLER
  tinha uma FILLER no meio do caminho
  tinha uma FILLER
  no meio do caminho tinha uma FILLER

  Nunca me esquecerei desse acontecimento
  na vida de minhas retinas tão fatigadas.
  Nunca me esquecerei que no meio do caminho
  tinha uma FILLER
  tinha uma pedra no meio do caminho
  no meio do caminho tinha uma FILLER
  `)
  const [poetryTitle, setPoetryTitle] = useState("")
  const [poetryFillers, setPoetryFillers] = useState("")
  const { mutate, isPending } = useMutation({
    mutationKey: [ApiPaths.poetries],
    mutationFn: async (poetry: Poetry) => {
      await post(ApiPaths.poetries, poetry)
    },
    onSuccess: () => {
      navigate("/")
    },
  })

  const handlePoetryTitleChange: React.ChangeEventHandler<
    HTMLTextAreaElement
  > = (evt) => {
    setPoetryTitle(evt.target.value)
  }

  const handlePoetryFillersChange: React.ChangeEventHandler<
    HTMLTextAreaElement
  > = (evt) => {
    setPoetryFillers(evt.target.value)
  }

  const handlePoetryChange: React.ChangeEventHandler<HTMLTextAreaElement> = (
    evt
  ) => {
    setPoetryRaw(evt.target.value)
  }

  const handleEnviar = () => {
    const body = parseStringifiedPoetry(poetryRaw)

    mutate({
      body,
      fillers: poetryFillers.split(" "),
      title: poetryTitle,
      id: poetryTitle.split(" ").join("-"),
    })
  }

  return (
    <Box
      component={Paper}
      elevation={24}
      sx={{
        // height: "100%",
        margin: 1,
      }}
      p={1}
      display="flex"
    >
      <Box display="flex" flexDirection="column" flex={2}>
        <TextField
          label="Titulo da Poesia"
          value={poetryTitle}
          onChange={handlePoetryTitleChange}
        />
        <TextField
          id="outlined-multiline-flexible"
          // label="Multiline"
          multiline
          minRows={15}
          sx={{
            "& *": {
              fontSize: "1.6rem",
              fontFamily: "super-mario-script",
            },
          }}
          value={poetryRaw}
          onChange={handlePoetryChange}
        />
        <TextField
          label="Preencha com as possíveis respostas, separando-as por espaço"
          value={poetryFillers}
          onChange={handlePoetryFillersChange}
        />
      </Box>
      <Box flex={1}>
        <Button
          onClick={handleEnviar}
          variant="contained"
          size="large"
          sx={{ fontSize: 24, ml: 2 }}
        >
          Enviar Poesia
        </Button>
        {isPending && <div>AGUARDE...</div>}
      </Box>
    </Box>
  )
}
