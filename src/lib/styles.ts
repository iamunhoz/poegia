import { createTheme } from "@mui/material"
import { AppColors } from "./definitions"

export const overridedMuiTheme = createTheme({
  typography: {
    fontFamily: [
      "ThaleahFat",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    button: {
      textTransform: "none",
    },
  },
})

export const getRandomColorClosure = () => {
  let idx = 0
  const colors = [
    AppColors.red,
    AppColors.yellow,
    AppColors.blue,
    AppColors.green,
    AppColors.purple,
  ]

  return () => {
    if (idx > 4) {
      idx = 0
    }
    return colors[idx++]
  }
}

export const getRandomColor = getRandomColorClosure()
