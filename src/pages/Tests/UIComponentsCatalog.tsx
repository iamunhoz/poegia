import { Box } from "@mui/material"
import { ButtonMarioStyle } from "src/components/ButtonMarioStyle"
import { GreenBoard } from "src/components/GreenBoard"
import { AppColors } from "src/lib/definitions"

export default function UIComponentsCatalog() {
  return (
    <GreenBoard
      sx={{
        height: "90%",
        margin: 5,
        // backgroundColor: "rgba(5,5,5,0.3)",
        // backgroundColor: "white",
        // borderRadius: "5px",
        pt: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "20px",

        "& *": {
          fontSize: "48px",
        },

        "& > div": {
          color: "white",
        },
      }}
    >
      <div style={{ fontFamily: "hey-gorgeous" }}>hey-gorgeous</div>
      <div style={{ fontFamily: "paper-mario" }}>paper-mario</div>
      <div style={{ fontFamily: "pop-happiness" }}>pop-happiness</div>
      <div style={{ fontFamily: "super-mario-script" }}>super-mario-script</div>
      <div style={{ fontFamily: "ThaleahFat" }}>ThaleahFat</div>
      <Box display="grid" gap="20px" gridTemplateColumns="repeat(5, 1fr)">
        <ButtonMarioStyle bgcolor={AppColors.red} label="stop" />
        <ButtonMarioStyle bgcolor={AppColors.green} label="go ahead" />
        <ButtonMarioStyle bgcolor={AppColors.blue} label="rest" />
        <ButtonMarioStyle bgcolor={AppColors.purple} label="sleep" />
        <ButtonMarioStyle bgcolor={AppColors.yellow} label="warning" />
        <ButtonMarioStyle outlined bgcolor={AppColors.red} label="stop" />
        <ButtonMarioStyle outlined bgcolor={AppColors.green} label="go ahead" />
        <ButtonMarioStyle outlined bgcolor={AppColors.blue} label="rest" />
        <ButtonMarioStyle outlined bgcolor={AppColors.purple} label="sleep" />
        <ButtonMarioStyle
          outlined
          bgcolor={AppColors.yellow}
          label="warning"
          onClick={() => {
            alert("warning")
          }}
        />
      </Box>
    </GreenBoard>
  )
}
