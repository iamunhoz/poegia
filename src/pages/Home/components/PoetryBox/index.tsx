import { Box, BoxProps, Input } from "@mui/material";
import { useAtom } from "jotai";
import { dalleImageQueryAtom } from "src/state";

export default function PoetryBox(props: BoxProps){
    const [dalleImageQuery, setDalleImageQuery] = useAtom(dalleImageQueryAtom);

    const handleQueryChange: React.ChangeEventHandler<HTMLInputElement> = (evt) => {
        setDalleImageQuery(String(evt.target.value));
    };

    return (
        <Box {...props}>
            <Input value={dalleImageQuery} onChange={handleQueryChange}/>
        </Box>
    )
}