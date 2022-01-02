import React from "react";
import { Container,Grid,Box,Typography} from "@mui/material";
import TextField from '@mui/material/TextField';
import { makeStyles } from "@mui/styles";

const useStyles=makeStyles((theme)=>({
    countGrid:{
        justifyContent:"center",
        alignContent:"center",
        justifyContent: "center",
        flexWrap: "wrap"
    },
    formsGrid:{
        borderRadius:"3vh",
        display:"flex",
        alignContent:"center",
        justifyContent: "center",
        flexWrap: "wrap"
    }
    
  }));

export default function Length() {
    const classes=useStyles();
    const [inch, setInch] = React.useState(2.54);
    const [cm, setCm] = React.useState(1);
    const handleOnCm = (event) => {
        setInch(0.393701*event.target.value);
        setCm(event.target.value);
    };
    const handleOnInch = (event) => {
        setCm(2.54*event.target.value);
        setInch(event.target.value);
    };
    
    return(
        <Container maxWidth="lg">
             <Typography variant="h4" align="center" color="textPrimary" gutterBottom>
                 Length
            </Typography>
            <Grid container spacing={2} className={classes.countGrid}>
                <Grid item xs={10} md={6} sm={8} >
                    <Box height="40vh" bgcolor='#e8e0e0'className={classes.formsGrid}>
                    <Box className={classes.formsGrid}
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                    >
                        <TextField
                        id="outlined-name"
                        color="secondary"
                        label={"inch"}
                        value={inch}
                        onChange={handleOnInch}
                        />
                        <TextField
                        id="outlined-name"
                        color="secondary"
                        label="cm"
                        value={cm}
                        onChange={handleOnCm}
                        />
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Container>
        
        
    );
}