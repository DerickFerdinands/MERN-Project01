import {Container, FormControl, InputLabel, TextField, Typography} from "@mui/material";

export const TextFields= ({fields})=>{

    return <>
        {fields.map(({lblText, placeholder})=> <Container sx={{display:"flex",flexDirection:'column'}}>
            <Typography sx={{fontFamily:'Poppins'}} marginBottom={1} variant={'h7'}>{lblText}</Typography>
            <TextField sx={{fontFamily:'Poppins'}} InputProps={{sx:{borderRadius:'25px'}}}  placeholder={placeholder} fullWidth  id="fullWidth" />
        </Container>)}

    </>
}