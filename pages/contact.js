import React from "react";
import Header from "../src/components/header"
import Navbar from "../src/components/navbar";
import { makeStyles } from "@mui/styles";
import {Container,CssBaseline,Grid,CardActions,Button, Card, CardMedia} from "@mui/material";

const useStyles=makeStyles((theme)=>({
  media:{
    height: 80,
    width: '100%',
    objectFit: 'contain'
    
  },
  card:{
    width: 80,
    margin: 'auto',
    boxShadow:"none"
    
  },
  profileCover:{
    maxWidth:"100%",
    minWidth:"100%",
    paddingTop:5,
    borderRadius:"3vh"
  },
  profilePhoto:{
    borderRadius:"50%",
    maxWidth:"30%",
    position:"relative",
    bottom:"8vh"
  },
  profile:{
    display:"flex",
    justifyContent:"center"
  }
}));

export default function Contact() {
  const classes=useStyles();
  return (
    <div>
      <Header><Navbar/></Header> 
      
      <CssBaseline/>
      <Container maxWidth="xl" classname={classes.profile}>
          <Grid item xs={12} md={12} classname={classes.profile}>
            <img src="/images/cover.jpg" className={classes.profileCover}/>
          </Grid>
          <Grid item xs={12} md={12} classname={classes.profile}>
            <img src="/images/profilephoto.jpg" className={classes.profilePhoto}/>
          </Grid>
      </Container>
      <Container maxWidth="lg">
            <Grid container spacing={1}>
              <Grid container item spacing={1}>
                <Grid item xs={3} md={3}>
                  
                    <Card className={classes.card}>
                      <CardMedia
                        component="img"
                        className={classes.media}
                        src="/images/linkedin.png"
                        alt="linkedin alireza vafadar"
                      />   
                      <CardActions>
                        <Button color="warning" size="small">Linkedin</Button>
                      </CardActions>
                    </Card>
                  
                </Grid>
                <Grid item xs={3} md={3}>
                  
                    <Card className={classes.card}>
                      <CardMedia
                        component="img"
                        className={classes.media}
                        src="/images/instagram.png"
                        alt="instagram front_end.jsx"
                      />
                      <CardActions>
                        <Button color="warning" size="small">instagram</Button>
                      </CardActions>
                    </Card>
                  
                </Grid>
                <Grid item xs={3} md={3}>
                  
                    <Card className={classes.card}>
                      <CardMedia
                        component="img"
                        className={classes.media}
                        src="/images/telegram.png"
                        alt="telegram"
                      />
                      <CardActions>
                        <Button color="warning" size="small">telegram</Button>
                      </CardActions>
                    </Card>
                  
                </Grid>
                <Grid item xs={3} md={3}>
                  
                    <Card className={classes.card}>
                      <CardMedia
                        component="img"
                        className={classes.media}
                        src="/images/mail.png"
                        alt="alireza vafadar gmail"
                      />
                      <CardActions>
                        <Button color="warning" size="small">mail</Button>
                      </CardActions>
                    </Card>
                  
                </Grid>
              </Grid>
            </Grid>
          </Container>
    </div>
  )
}