import { Outlet } from 'react-router-dom';
// import { useAtomValue } from 'jotai';
// import { borderAtom, themeAtom } from 'src/state';
import Footer from './Footer';
import Header from './Header';
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';
import { useAtomValue } from 'jotai';
import { isLoggedinAtom } from 'src/state';
import { Box } from '@mui/material';

export default function Layout(): JSX.Element {
  const isLoggedin = useAtomValue(isLoggedinAtom)
  // const theme = useAtomValue(themeAtom);
  // const border = useAtomValue(borderAtom);

  let navigate = useNavigate();

  /* useEffect(() => {
    if (isLoggedin !== 'depend') {
      return navigate("/login");
    }
  }, [isLoggedin]); */

  return (
    <Box display="flex" flexDirection="column" sx={{height: "99svh"}} id="layout-container">
      <Header />
      <Box component="main" flex={1}>
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
}
