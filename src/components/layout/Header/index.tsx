// import { useAtom } from 'jotai';
// import { ETheme, themeAtom } from 'src/state';

import { Box, Typography } from "@mui/material"
import { UserMenu } from "./UserMenu"

export default function Header(): JSX.Element {
  return (
    <Box component="header" display="flex" justifyContent="center">
      <Typography
        variant="h1"
        fontSize="7rem"
        sx={{
          color: "white",
          textShadow:
            "-5px 0 rgba(0,0,0,1), 0 5px rgba(0,0,0,1), 5px 0 rgba(0,0,0,1), 0 -5px rgba(0,0,0,1)",
          fontFamily: "paper-mario",
        }}
      >
        Poegia
      </Typography>

      {null && <UserMenu sx={{ position: "absolute", right: 0 }} />}
    </Box>
  )
}

/** teste de background mais estilizado para o titulo
 *
 * // import { useAtom } from 'jotai';
// import { ETheme, themeAtom } from 'src/state';

import { Box, Typography } from "@mui/material"
import { UserMenu } from "./UserMenu"
import LeafBg from "src/lib/assets/Prinbles_Asset_Robin/svg/Logotype/Back.svg"
import NameBack from "src/lib/assets/Prinbles_Asset_Robin/svg/Logotype/NameBack.svg"

export default function Header(): JSX.Element {
  // const [theme] = useAtom(themeAtom);

  return (
    <Box component="header" display="flex" justifyContent="center">
      <Typography
        variant="h1"
        fontSize={72}
        sx={{
          color: "white",
          textShadow:
            "-3px 0 rgba(0,0,0,1), 0 3px rgba(0,0,0,1), 3px 0 rgba(0,0,0,1), 0 -3px rgba(0,0,0,1)",
          fontFamily: "paper-mario",
          position: "relative",
          // backgroundImage: `url(${LeafBg})`,
          // backgroundSize: "350px 120px",
          // backgroundRepeat: "no-repeat",
          // textAlign: "center",
          // p: 4,

          pl: "80px",
          pr: "80px",

          display: "flex",
          justifyContent: "center",
          alignItems: "center",

          "& > img": {
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 0,
          },

          "& > .game-title-leaf-bg": {
            width: "100%",
          },

          "& > .game-title-name-bg": {
            top: "15px",
            width: "65%",
            left: "50%",
            transform: "translateX(-50%)",
          },

          "& > span": {
            position: "relative",
            zIndex: 10,
            marginTop: "12px",
          },
        }}
      >
        <img src={LeafBg} className="game-title-leaf-bg" />
        <img src={NameBack} className="game-title-name-bg" />
        <span>Poegia</span>
      </Typography>

      <UserMenu sx={{ position: "absolute", right: 0 }} />
    </Box>
  )
}

 */
