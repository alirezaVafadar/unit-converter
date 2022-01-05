import React from "react";
import { Container,Grid,Box,Typography} from "@mui/material";
import TextField from '@mui/material/TextField';
import { makeStyles } from "@mui/styles";
import InputAdornment from '@mui/material/InputAdornment';

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

export default function Area() {
    const classes=useStyles();
    const [sqfeet, setSqfeet] = React.useState(10.764);
    const [meter, setMeter] = React.useState(1);
    const handleOnMeter = (event) => {
        setSqfeet(10.764*event.target.value);
        setMeter(event.target.value);
    };
    const handleOnSqfeet = (event) => {
        setMeter(0.092903*event.target.value);
        setSqfeet(event.target.value);
    };
    
    return(
        <Container maxWidth="lg">
             <Typography variant="h4" align="center" color="textPrimary" gutterBottom>
                 Area
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
                        label={"ft²"}
                        value={sqfeet}
                        InputProps={{
                            endAdornment: <InputAdornment position="end">sqft</InputAdornment>,
                          }}
                        onChange={handleOnSqfeet}
                        />
                        <TextField
                        id="outlined-name"
                        color="secondary"
                        label="m²"
                        value={meter}
                        onChange={handleOnMeter}
                        />
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Container>
        
        
    );
}