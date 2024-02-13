import {
  Box,
  BoxProps,
  CircularProgress,
  Paper,
  Typography,
} from "@mui/material"
import { useAtom, useSetAtom } from "jotai"
import { dalleImageURLAtom, gameStepAtom } from "src/state"
import { useState } from "react"
import { openaiImageQuery } from "src/lib/api/openAI"
import { usePoetryActions } from "src/lib/hooks/usePoetryActions"
import { ButtonMarioStyle } from "src/components/ButtonMarioStyle"
import { AppColors } from "src/lib/definitions"
import dallePicturePlaceholder from "src/lib/assets/dallePicturePlaceholder.png"

export default function PoetryImageResult(props: BoxProps) {
  const { generateDalleQuery } = usePoetryActions()
  const setGameStep = useSetAtom(gameStepAtom)
  const [isLoading, setIsLoading] = useState(false)
  const [dalleImageURL, setDalleImageURL] = useAtom(dalleImageURLAtom)

  const handleGerar = async () => {
    setIsLoading(true)
    const imageURL = await openaiImageQuery(generateDalleQuery())
    if (imageURL) {
      setDalleImageURL(imageURL)
    }
    setIsLoading(false)
  }

  const handleDowload = () => {
    if (!dalleImageURL) return
    const linkDownload = document.createElement("a")
    linkDownload.download = "file"
    linkDownload.target = "_blank"
    linkDownload.href = dalleImageURL
    document.body.appendChild(linkDownload)
    linkDownload.click()
    document.body.removeChild(linkDownload)
  }

  const handleReiniciar = () => {
    setGameStep("poetry-selection")
  }

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      width="100%"
      gap={6}
      pt={4}
    >
      <Box
        {...props}
        component={Paper}
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{
          minWidth: "38rem",
          maxWidth: "38rem",
          minHeight: "38rem",
          maxHeight: "38rem",
          borderRight: "5px solid rgba(0,0,0,1)",
          borderBottom: "5px solid rgba(0,0,0,1)",
          boxShadow: "10px 10px 0 0 rgba(0, 0, 0, 0.3)",
          position: "relative",
          // p: 1,

          "& > img": {
            maxHeight: "98%",
            maxWidth: "98%",

            opacity: dalleImageURL ? undefined : "0.4",
          },
        }}
      >
        <img
          src={dalleImageURL || dallePicturePlaceholder}
          alt={dalleImageURL || dallePicturePlaceholder}
        />
        {!dalleImageURL && (
          <Typography
            variant="body1"
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              textAlign: "center",
              fontFamily: "super-mario-script",
              opacity: 0.5,
            }}
          >
            {isLoading ? (
              <CircularProgress />
            ) : (
              "Clique abaixo para gerar a imagem"
            )}
          </Typography>
        )}
      </Box>
      <Box>
        <ButtonMarioStyle
          label={isLoading ? "Aguarde" : "Gerar"}
          bgcolor={AppColors.blue}
          onClick={handleGerar}
          disabled={isLoading || !!dalleImageURL}
          sx={{
            width: "16rem",
            height: "6rem",
            fontSize: "3.6rem",
          }}
        />

        {dalleImageURL && (
          <ButtonMarioStyle
            label="Download"
            bgcolor={AppColors.purple}
            onClick={handleDowload}
            // disabled={isLoading || !!dalleImageURL}
            sx={{
              ml: 1,
              width: "18rem",
              height: "6rem",
              fontSize: "3.6rem",
            }}
          />
        )}
      </Box>
      <ButtonMarioStyle
        label="Reiniciar"
        bgcolor={AppColors.green}
        onClick={handleReiniciar}
        // disabled={isLoading || !!dalleImageURL}
        sx={{
          width: "12rem",
          height: "4rem",
          fontSize: "2.4rem",
        }}
      />
    </Box>
  )
}
