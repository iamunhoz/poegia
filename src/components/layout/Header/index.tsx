// import { useAtom } from 'jotai';
// import { ETheme, themeAtom } from 'src/state';

import { Box, Typography } from "@mui/material";
import { UserMenu } from "./UserMenu";

export default function Header(): JSX.Element {
  // const [theme] = useAtom(themeAtom);

  return (
    <Box component="header" display="flex" justifyContent="center" height={50}/* theme={theme} */>
      <Typography variant="h1" fontSize={48}>Poegia</Typography>

      <UserMenu sx={{ position: "absolute", right: 0}} />
    </Box>
  );
}
