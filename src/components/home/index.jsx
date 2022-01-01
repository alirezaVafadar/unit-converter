import * as React from 'react';
import { makeStyles } from "@mui/styles";
import { Typography,Box,Container,CssBaseline,Grid,Paper, Card, CardMedia} from "@mui/material";


const useStyles=makeStyles((theme)=>({
  mainContainer:{
    display:"flex",
    flexWrap: "wrap",
    alignContent: "center",
    justifyContent: "center",
    alignItems: "flex-start",
    marginBottom:"2vh"
  },
  mainBox:{
    borderRadius:"3vh"
  },
  media:{
    height: 95,
    width: '100%',
    objectFit: 'contain'
    
  },
  adsGrid:{
    justifyContent:"center"
  },
  card:{
    width: 95,
    margin: 'auto',
    boxShadow:"none"
    
  }
}));

export default function Home() {
  const classes=useStyles();

  return (
    <>
      <CssBaseline />
          <Typography variant="h4" align="center" color="textPrimary" gutterBottom>
            Unit Convertion for middle-east immigrants
          </Typography>
          
          <Container maxWidth="xl" className={classes.mainContainer}>
            <Grid container spacing={2} className={classes.adsGrid}>
            <Grid item xs={0}  md={2} sm={0} />
              <Grid item xs={12}  md={8} sm={10} >
                <Box className={classes.mainBox} sx={{ bgcolor: '#e8e0e0'}}  >
                  <Typography variant="h6" align="center" color="textPrimary" padding="4vh">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
                  ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cil
                  lum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culp
                  a qui officia deserunt mollit anim id est laborum.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
                  ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cil
                  lum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culp
                  a qui officia deserunt mollit anim id est laborum.
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={8} md={2} sm={4} className={classes.adsGrid}>
                <Box>
                  <Card >
                  <CardMedia 
                    component="img"
                    height="100%"
                    width="190px"
                    src="/images/ads.gif"
                    alt="ads"
                  />
                  </Card>
                </Box>
              </Grid>
            </Grid>
          </Container>
          <Typography variant="h5" align="center" color="textPrimary" gutterBottom>
              Technologies used for this website
          </Typography>
          <Container maxWidth="lg" className={classes.mainContainer}>
            <Grid container spacing={1}>
              <Grid container item spacing={3}>
                <Grid item xs={6} md={3}>
                  
                    <Card className={classes.card}>
                      <CardMedia
                        component="img"
                        className={classes.media}
                        src="/images/react.png"
                        alt="react js"
                      />
                    </Card>
                  
                </Grid>
                <Grid item xs={6} md={3}>
                  
                    <Card className={classes.card}>
                      <CardMedia
                        component="img"
                        className={classes.Media}
                        src="/images/mui.png"
                        alt="material ui"
                      />
                    </Card>
                  
                </Grid>
                <Grid item xs={6} md={3}>
                  
                    <Card className={classes.card}>
                      <CardMedia
                        component="img"
                        className={classes.media}
                        src="/images/next-js.svg"
                        alt="next js"
                      />
                    </Card>
                  
                </Grid>
                <Grid item xs={6} md={3}>
                  
                    <Card className={classes.card}>
                      <CardMedia
                        component="img"
                        className={classes.media}
                        src="/images/jss.png"
                        alt="css in js"
                      />
                    </Card>
                  
                </Grid>
              </Grid>
            </Grid>
          </Container>
          <Typography  variant="h6" align="center" color="textSecondary" fontSize="80%" bgcolor="#e8e0e0 " marginTop="2vh">
            designed by Alireza Vafadar
          </Typography>
        </>

  );
}

