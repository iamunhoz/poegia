import UIComponentsCatalog from "./UIComponentsCatalog"
// import { GreenBoard } from "src/components/GreenBoard"
// import { ButtonPixelGamer } from "src/components/ButtonPixelGamer"
import { Box, Paper } from "@mui/material"

const sentence =
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis nostrum similique nihil dolore cupiditate saepe id nulla qui quae repellendus iure minus odio exercitationem earum accusantium dolorem expedita voluptates quisquam, atque ipsum inventore possimus odit distinctio! Necessitatibus quidem ipsa quasi blanditiis quaerat sapiente eos veritatis distinctio! Culpa nihil exercitationem deleniti?"

const text: string[] = []

for (let i = 0; i < 10; i += 1) {
  text.push(sentence)
}

export default function Tests() {
  return (
    <>
      <Box
        component={Paper}
        sx={{
          padding: 4,
          margin: 4,
          columnCount: 2,
          columnGap: "1rem",
          columnRule: "1px solid black",
        }}
      >
        {text.map((_s, idx) => (
          <p key={idx}>{_s}</p>
        ))}
      </Box>
      {true && <UIComponentsCatalog />}
    </>
  )
}
