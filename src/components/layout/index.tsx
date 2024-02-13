import { Outlet } from "react-router-dom"
// import Footer from "./Footer"
import Header from "./Header"
import { Box } from "@mui/material"
import woodenWallBg from "src/lib/assets/wooden-wall-cropped.png"

export default function Layout(): JSX.Element {
  return (
    <Box
      display="flex"
      flexDirection="column"
      sx={{
        height: "100svh",
        backgroundImage: `url(${woodenWallBg})`,
        backgroundSize: "cover",
      }}
      id="layout-container"
    >
      <Header />
      <Box component="main" flex={1}>
        <Outlet />
      </Box>
      {/* <Footer /> */}
    </Box>
  )
}
