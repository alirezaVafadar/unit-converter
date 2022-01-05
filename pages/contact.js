import React from "react";
import Header from "../src/components/header"
import Navbar from "../src/components/navbar";
import { makeStyles } from "@mui/styles";
import AccountCircle from '@mui/icons-material/AccountCircle';
import {Container,CssBaseline,Grid,Button, Box,Typography,TextField} from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
const useStyles=makeStyles((theme)=>({
  media:{
    height: "70%",
    width: '70%',
    objectFit: 'contain'
    
  },
  profileCover:{
    maxWidth:"100%",
    minWidth:"100%",
    borderRadius:"3vh",
    
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
  {
    url:"/images/linkedin.png",
    link:"http://linkedin.com/in/alireza-vafadar-9822b9176"
  },
  {
    url:"/images/instagram.png",
    link:"https://www.instagram.com/front_end.jsx/"
  },
  {
    url:"/images/telegram.png",
    link:"https://t.me/alireza_vafadar"
  },
  {
    url:"/images/mail.png",
    link:"mailto:alireza.vfr.mail@gmail.com"
  }
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
          <Container maxWidth="lg">
            <Grid md={12} marginBottom="5%">
              <Box sx={{display: 'flex', alignItems: 'flex-end' }}>
                <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                <TextField id="input-with-sx" label="Your Name" variant="standard" />
              </Box>
            </Grid>
            <Grid md={12} marginBottom="4%">
              <TextField
                  id="outlined-multiline-static"
                  label="your message"
                  multiline
                  rows={5}
                  style={{width:"90%"}}
                />
            </Grid>
            <Grid md={12} marginBottom="10%">
              <Button variant="contained" endIcon={<SendIcon />}>
                  Send
              </Button>
            </Grid>
              
            </Container>
          <Container maxWidth="lg" >
            <Grid container spacing={1} >
              <Grid container item spacing={1} className={classes.socials}>
                {
                  srcSocials.map((item)=>{return(
                    <Grid item xs={2} md={1}>
                      <a href={item.link}>
                        <img
                          className={classes.media}
                          src={item.url}
                        />   
                      </a>
                    </Grid>
                  )})
                }
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Container>
      <Typography  variant="h6" align="center" color="textSecondary" fontSize="80%" bgcolor="#e8e0e0 " marginTop="2vh">
            designed by Alireza Vafadar
      </Typography>
    </div>
  )
}