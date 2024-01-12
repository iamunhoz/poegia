import { Box } from "@mui/material";
import { useAtomValue } from "jotai";
import { dalleImageURLAtom } from "src/state";

export default function ImageFrame() {
  const dalleImageURL = useAtomValue(dalleImageURLAtom);

  if (!dalleImageURL) {
    return <div>no image</div>
  }
  return <Box>
    <img src={dalleImageURL} alt={dalleImageURL}/>
  </Box>;
}