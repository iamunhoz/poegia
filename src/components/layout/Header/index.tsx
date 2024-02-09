// import { useAtom } from 'jotai';
// import { ETheme, themeAtom } from 'src/state';

import { Box, Typography } from "@mui/material"
import { UserMenu } from "./UserMenu"

export default function Header(): JSX.Element {
  // const [theme] = useAtom(themeAtom);

  return (
    <Box
      component="header"
      display="flex"
      justifyContent="center"
      height={50} /* theme={theme} */
    >
      <Typography
        variant="h1"
        fontSize={96}
        sx={{
          color: "white",
          textShadow:
            "-5px 0 rgba(0,0,0,1), 0 5px rgba(0,0,0,1), 5px 0 rgba(0,0,0,1), 0 -5px rgba(0,0,0,1)",
          fontFamily: "paper-mario",
        }}
      >
        Poegia
      </Typography>

      <UserMenu sx={{ position: "absolute", right: 0 }} />
    </Box>
  )
}
