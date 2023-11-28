import { Box, Button, Input } from "@mui/material";
import { useAtom } from "jotai";
import { openaiImageQuery } from "src/api";
import { dalleImageQueryAtom, dalleImageURLAtom } from "src/state";

export default function PoetryBox(){
    const [dalleImageQuery, setDalleImageQuery] = useAtom(dalleImageQueryAtom);
    const [,setDalleImageURL] = useAtom(dalleImageURLAtom);

    const handleQueryChange: React.ChangeEventHandler<HTMLInputElement> = (evt) => {
        setDalleImageQuery(String(evt.target.value));
    };

    const handleGerar = async () => {
        const imageURL = await openaiImageQuery(dalleImageQuery);

        setDalleImageURL(imageURL)
    }

    return (
        <Box>
            <Input value={dalleImageQuery} onChange={handleQueryChange}/>
            <Button onClick={handleGerar}>Gerar</Button>
        </Box>
    )
}