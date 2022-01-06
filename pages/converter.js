import React from "react";
import Header from "../src/components/header"
import Navbar from "../src/components/navbar";
import { makeStyles } from "@mui/styles";
import {Container,CssBaseline,Grid,Button, Box,Typography,TextField,MenuItem} from "@mui/material";
import  {units}  from "../src/utils/units";
const useStyles=makeStyles((theme)=>({
   profileBox:{
    borderRadius:"3vh",
    marginTop:"2vh"
  },
  center:{
    display:"flex",
    justifyContent:"center"
  },
  unitsMenu:{
    paddingTop:"5vh",
    display:"flex",
    justifyContent:"center",
    flexWrap:"wrap"
  },
  mainBox:{
    borderRadius:"3vh",
    marginTop:"2vh",
  },
  formsGrid:{
    borderRadius:"3vh",
    display:"flex",
    alignContent:"center",
    justifyContent: "center",
    flexWrap: "wrap",
    paddingBottom:"5vh"
  }
}));
export default function Converter() {
  const [unit, setUnit] = React.useState('EUR');
  const classes=useStyles();
  const handleChange = (event) => {
    setUnit(event.target.value);
  };
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
  return (
    <div>
      <Header><Navbar/></Header>
      <CssBaseline/> 
      <Container maxWidth="xl">
        <Box sx={{ bgcolor: '#9c27b04a'}} className={classes.mainBox} >
          <Container maxWidth="lg" >
            <Grid className={classes.unitsMenu}>
              <Grid md={12} xs={12} marginBottom="5%" className={classes.center}>
                  <TextField
                    id="outlined-select-currency"
                    select
                    label="Select"
                    value={unit}
                    onChange={handleChange}
                    helperText="Please select your currency"
                    style={{width:"80%"}}
                  >
                    {units.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
              </Grid>
              <Grid md={12} xs={12} marginBottom="5%" className={classes.center}>
                  <TextField
                    id="outlined-select-currency"
                    select
                    label="Select"
                    value={unit}
                    onChange={handleChange}
                    helperText="Please select your currency"
                    style={{width:"80%"}}
                  >
                    {units.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
              </Grid>
            </Grid>
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
          </Container>
        </Box>
      </Container>
      
    </div>
  )
}