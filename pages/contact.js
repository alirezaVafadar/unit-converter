import React from "react";
import Header from "../src/components/header"
import Navbar from "../src/components/navbar";
import { makeStyles } from "@mui/styles";
import {Container,CssBaseline,Grid, Box,Typography} from "@mui/material";

const useStyles=makeStyles((theme)=>({
  media:{
    height: "70%",
    width: '70%',
    objectFit: 'contain'
    
  },
  profileCover:{
    maxWidth:"100%",
    minWidth:"100%",
    borderRadius:"3vh"
  },
  profilePhoto:{
    border:"solid",
    borderWidth:"3px",
    borderColor:"#9c27b0",
    borderRadius:"50%",
    maxWidth:"30%",
    
    
  },
  profile:{
    display:"flex",
    justifyContent:"center",
    position:"relative",
    bottom:"8vh" 
  },
  socials:{
    display:"flex",
    justifyContent:"center",
  },
  profileBox:{
    borderRadius:"3vh",
    marginTop:"2vh",
  }
}));
const srcSocials=[
  "/images/linkedin.png",
  "/images/instagram.png",
  "/images/telegram.png",
  "/images/mail.png"
]
export default function Contact() {
  const classes=useStyles();
  return (
    <div>
      <Header><Navbar/></Header> 
      
      <CssBaseline/>
      <Container maxWidth="xl">
        
        <Box sx={{ bgcolor: '#9c27b04a'}} className={classes.profileBox}>
          <Grid item xs={12} md={12} classname={classes.profile}>
            <img src="/images/cover.jpg" className={classes.profileCover}/>
          </Grid>
          <Grid item xs={12} md={12}  className={classes.profile}>
            <img src="/images/profilephoto.jpg" className={classes.profilePhoto}/>
          </Grid>
          <Typography variant="h5"align="center" className={classes.profile} >Alireza Vafadar</Typography>
          <Typography variant="h6"align="center" className={classes.profile} gutterBottom>Front-End developer(React JS)</Typography>
          <Container maxWidth="lg" >
            <Grid container spacing={1} >
              <Grid container item spacing={1} className={classes.socials}>
                {
                  srcSocials.map((url)=>{return(
                    <Grid item xs={2} md={1}>
                      <img
                        className={classes.media}
                        src={url}
                      />   
                    </Grid>
                  )})
                }
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Container>
      
    </div>
  )
}