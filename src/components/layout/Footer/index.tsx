// import { Link } from 'react-router-dom';

import { Box, Typography } from "@mui/material";

export default function Footer(): JSX.Element {
  return (
    <Box component="footer" height={25} display="flex" justifyContent="center">
      <Typography variant="subtitle2" >This is a very tiny footer</Typography>
    </Box>
  );
}
