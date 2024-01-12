import { Box, Button, Input } from "@mui/material";
import { useSetAtom } from "jotai";
import { isLoggedinAtom } from "src/state";

export default function Login() {
    const setLoggedIn = useSetAtom(isLoggedinAtom)
    const handleLogin = () => {
        setLoggedIn('depend')
    }

    return (
      <Box
        component="main"
        sx={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box display="flex" flexDirection="column">
          <Input />
          <Input />
          <Button onClick={handleLogin}>Login</Button>
        </Box>
      </Box>
    );
}