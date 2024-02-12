import { Button, ButtonProps } from "@mui/material"

interface ButtonPixelGamerProps extends ButtonProps {
  label: string
}

export function ButtonPixelGamer(props: ButtonPixelGamerProps): JSX.Element {
  const { label, sx, ...rest } = props
  return (
    <Button
      sx={{
        ...sx,
      }}
      {...rest}
    >
      {label}
    </Button>
  )
}
