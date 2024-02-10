import { Button, ButtonProps } from "@mui/material"
import { AppColors } from "src/lib/definitions"

interface IMarioButtonProps extends ButtonProps {
  bgcolor: AppColors
  label: string
  outlined?: boolean
}

export function ButtonMarioStyle(props: IMarioButtonProps) {
  const { bgcolor, label, outlined, ...restProps } = props
  return (
    <Button
      sx={{
        backgroundColor: bgcolor,
        fontFamily: "paper-mario",
        color: "white",
        fontSize: "36px",
        borderRight: "5px solid rgba(0,0,0,0.7)",
        borderBottom: "5px solid rgba(0,0,0,0.7)",
        boxShadow: "5px 5px 0 0 rgba(0, 0, 0, 0.5)",
        textShadow: outlined
          ? "0 5px rgba(0,0,0,0.7), 5px 0 rgba(0,0,0,0.7)"
          : undefined,

        "&:hover": {
          backgroundColor: bgcolor,
          transform: "scale(1.1)",
        },
      }}
      {...restProps}
    >
      {label}
    </Button>
  )
}
