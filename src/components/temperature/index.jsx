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

export default function Temperature() {
    const classes=useStyles();
    const [fahrenheit, setFahrenheit] = React.useState(33.8);
    const [celsius, setCelsius] = React.useState(1);
    const handleOnCelsius = (event) => {
        setFahrenheit((9/5*event.target.value)+32);
        setCelsius(event.target.value);
    };
    const handleOnFahrenheit = (event) => {
        setCelsius((event.target.value-32)*5/9);
        setFahrenheit(event.target.value);
    };
    
    return(
        <Container maxWidth="lg">
             <Typography variant="h4" align="center" color="textPrimary" gutterBottom>
                 Temperature
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
                        label={"fahrenheit"}
                        value={fahrenheit}
                        onChange={handleOnFahrenheit}
                        />
                        <TextField
                        id="outlined-name"
                        color="secondary"
                        label="celsius"
                        value={celsius}
                        onChange={handleOnCelsius}
                        />
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Container>
        
        
    );
}