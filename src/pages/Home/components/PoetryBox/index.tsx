import { Box, Input } from "@mui/material";
import { useAtom } from "jotai";
import { dalleImageQueryAtom } from "src/state";

export default function PoetryBox(){
    const [dalleImageQuery, setDalleImageQuery] = useAtom(dalleImageQueryAtom);

    const handleQueryChange: React.ChangeEventHandler<HTMLInputElement> = (evt) => {
        setDalleImageQuery(String(evt.target.value));
    };

    return (
        <Box>
            <Input value={dalleImageQuery} onChange={handleQueryChange}/>
        </Box>
    )
}