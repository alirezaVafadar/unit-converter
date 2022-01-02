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

export default function Mass() {
    const classes=useStyles();
    const [lbs, setLbs] = React.useState(2.20462);
    const [kg, setKg] = React.useState(1);
    const handleOnKg = (event) => {
        setLbs(2.20462*event.target.value);
        setKg(event.target.value);
    };
    const handleOnLbs = (event) => {
        setKg(0.453592*event.target.value);
        setLbs(event.target.value);
    };
    
    return(
        <Container maxWidth="lg">
             <Typography variant="h4" align="center" color="textPrimary" gutterBottom>
                 Mass
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
                        label={"lbs"}
                        value={lbs}
                        onChange={handleOnLbs}
                        />
                        <TextField
                        id="outlined-name"
                        color="secondary"
                        label="kg"
                        value={kg}
                        onChange={handleOnKg}
                        />
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Container>
        
        
    );
}