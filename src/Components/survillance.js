import React from 'react';
import { AppBar, Grid, makeStyles, Button, Typography} from '@material-ui/core';


const useStyles=makeStyles(theme=>({
  AppBarHeight: {
    // ...theme.mixins.toolbar,
    marginBottom: "3rem",
    opacity: 0.5,
    [theme.breakpoints.down("md")]:{
      marginBottom: '1.5rem'
    },
    [theme.breakpoints.down("xs")]:{
      marginBottom: '2rem'
    }
  },
  AppBarMargin: {
    // ...theme.mixins.toolbar,
    marginBottom: "4.8rem",
    [theme.breakpoints.down("md")]:{
      marginBottom: '4.4em'
    },
    [theme.breakpoints.down("xs")]:{
      marginBottom: '3.8rem'
    }
  },
  button: {
    ...theme.typography.button,
    marginLeft: "12px",
    marginRight: "25px",

    "&:hover": {
      transform: "scale(1.1) translateY(-1.3rem)",
      boxShadow: "0 1rem 2rem rgba(0,0,0, .2)",
    },
    // float: "bottom",
    // position: "absolute"
    // marginBottom: "16.5rem"
  },
  tabContainer: {
    marginLeft: "auto",
    alignItems: "center",
    marginRight: "auto",
    borderRight: "2px solid blue",
    height: "90vh"
    // zIndex: 10000
  },
  tab: {
    // fontFamily: "Railway",
    textTransform: 'uppercase',
    textDecoration: "none",
    fontWeight: 500,
    fontSize: '1.8rem',
    borderBottom: "1px solid black",
    color: "black",
    // width: "fit-content",
    zIndex: 10000,
    minWidth: 10,
    marginLeft: "25px",
    // marginTop: "2rem",
    marginRight: "25px"
  },
  streamer: {
    height: "88vh",
    backgroundColor: "#f0f0f0",
    marginBottom: "1.5rem"
  }
}))




export default function Survilance(){

  const classes=useStyles()

  const tabsComponent = (
    <React.Fragment>
      <Grid container className={classes.tabContainer}>
        <Grid item lg={12}>
          <div className={classes.tab}  href="/survilance/webcam_mask">Live: Detect Masks</div>
        </Grid>
        <Grid item lg={12}>
          <div className={classes.tab} href="/survilance/webcam_mask">Live: Detect Distance</div>
        </Grid>
        <Grid item lg={12}>
          <div className={classes.tab} href="/survilance/webcam_mask">Detect Masks</div>
        </Grid>
        <Grid item lg={12}>
          <div className={classes.tab} href="/survilance/webcam_mask">Detect distance</div>
        </Grid>
        <Grid item lg={12}>
          <Button className={classes.button} href="/">
            STOP
          </Button>
        </Grid>
      </Grid>
    </React.Fragment>
  )

  return(
    <React.Fragment>
      <AppBar>
        <Typography variant="h6">  COVID-19 Survilance System </Typography>
        <div className={classes.AppBarHeight}/>
      </AppBar>
      <div className={classes.AppBarMargin}/>
      <Grid container>
        <Grid item lg={2}>
          {tabsComponent}
        </Grid>
        <Grid item container direction="column" lg style={{marginLeft: "25px", marginTop: "25px"}}>
          <Grid item>
            <div className={classes.streamer}>
              STREAMER
            </div>
          </Grid>
          <Grid item align="center">
            
          </Grid>
        </Grid>
        <Grid item container direction="column" lg={2} style={{marginLeft: "25px", marginTop: "25px"}}>
          <Grid item>
            GUIDELINES
          </Grid>
          <Grid item>
            SOME NEWS
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}