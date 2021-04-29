
import React, { useEffect, useState, forwardRef, useImperativeHandle } from "react";
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';




const Gallery = forwardRef((props, ref) => {


  let buttonsEnabled=false;

  const chooseJob= () => {

    global.gotoPage("Train");
  }
  

  

  useEffect(() => {
    const timer = setTimeout(() => {
      buttonsEnabled=true;
    }, 500);
    return () => clearTimeout(timer);
  }, []);




    return (
        <div>
        <p></p>
     <h3>Available Jobs</h3> 
        <Paper>
        <Grid container  spacing={12} >  
        <Grid item xs={8}>
        <h4 align="left"> Outline a car in an image. </h4>
        </Grid>
           <Button  variant="contained" color="primary" onClick={() => { chooseJob() }}>  Choose this Gig</Button>
        </Grid>        
        </Paper>
        <p></p>
        <p></p>
        <p></p>
        <Button variant="contained" color="primary"  onClick={() => {global.gotoPage("Dashboard")}}> Return to Dashboard </Button>
      </div>
    )
});

export default Gallery