import { Box, BoxProps, Button, Paper } from "@mui/material";
import { useAtom, useAtomValue } from "jotai";
import { dalleImageQueryAtom, dalleImageURLAtom } from "src/state";
import { openaiImageQuery } from "src/api";

export default function ImageFrame(props: BoxProps) {
  const [dalleImageQuery] = useAtom(dalleImageQueryAtom);
  const [, setDalleImageURL] = useAtom(dalleImageURLAtom);

  const dalleImageURL = useAtomValue(dalleImageURLAtom);

  const handleGerar = async () => {
    const imageURL = await openaiImageQuery(dalleImageQuery);

    setDalleImageURL(imageURL);
  };

  return (
    <Box {...props} component={Paper} display="flex" justifyContent="center" alignItems="center">
      {dalleImageURL ? (
        <img src={dalleImageURL} alt={dalleImageURL} />
      ) : (
        <Button onClick={handleGerar}>Gerar</Button>
      )}
    </Box>
  );
}