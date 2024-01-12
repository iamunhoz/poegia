import { Box } from "@mui/material";
import { ImageFrame, PoetryBox, Wordbank } from "./components";

export default function Home() {
    return (
      <Box display="flex" height="100%" gap={2} p={2}>
        <Box display="flex" flexDirection="column" flex={1} gap={2}>
          <PoetryBox flex={3} />
          <Wordbank flex={1} />
        </Box>
        <ImageFrame flex={2}/>
      </Box>
    );
}