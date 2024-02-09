import { Box, Button, ButtonProps } from "@mui/material"

enum ButtonMarioStyleColors {
  red = "#ff595e",
  yellow = "#ffca3a",
  green = "#8ac926",
  blue = "#1982c4",
  purple = "#6a4c93",
}

interface IMarioButtonProps extends ButtonProps {
  bgcolor: ButtonMarioStyleColors
  label: string
  outlined?: boolean
}

const ButtonMarioStyle = (props: IMarioButtonProps) => {
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

export default function Tests() {
  return (
    <Box
      sx={{
        height: "90%",
        margin: 5,
        // backgroundColor: "rgba(5,5,5,0.3)",
        backgroundColor: "white",
        borderRadius: "5px",
        p: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "50px",

        "& *": {
          fontSize: "48px",
        },
      }}
    >
      <div style={{ fontFamily: "hey-gorgeous" }}>hey-gorgeous</div>
      <div style={{ fontFamily: "paper-mario" }}>paper-mario</div>
      <div style={{ fontFamily: "pop-happiness" }}>pop-happiness</div>
      <div style={{ fontFamily: "super-mario-script" }}>super-mario-script</div>
      <div style={{ fontFamily: "ThaleahFat" }}>ThaleahFat</div>
      <Box display="grid" gap="20px" gridTemplateColumns="repeat(5, 1fr)">
        <ButtonMarioStyle bgcolor={ButtonMarioStyleColors.red} label="stop" />
        <ButtonMarioStyle
          bgcolor={ButtonMarioStyleColors.green}
          label="go ahead"
        />
        <ButtonMarioStyle bgcolor={ButtonMarioStyleColors.blue} label="rest" />
        <ButtonMarioStyle
          bgcolor={ButtonMarioStyleColors.purple}
          label="sleep"
        />
        <ButtonMarioStyle
          bgcolor={ButtonMarioStyleColors.yellow}
          label="warning"
        />
        <ButtonMarioStyle
          outlined
          bgcolor={ButtonMarioStyleColors.red}
          label="stop"
        />
        <ButtonMarioStyle
          outlined
          bgcolor={ButtonMarioStyleColors.green}
          label="go ahead"
        />
        <ButtonMarioStyle
          outlined
          bgcolor={ButtonMarioStyleColors.blue}
          label="rest"
        />
        <ButtonMarioStyle
          outlined
          bgcolor={ButtonMarioStyleColors.purple}
          label="sleep"
        />
        <ButtonMarioStyle
          outlined
          bgcolor={ButtonMarioStyleColors.yellow}
          label="warning"
          onClick={() => {
            alert("warning")
          }}
        />
      </Box>
    </Box>
  )
}
