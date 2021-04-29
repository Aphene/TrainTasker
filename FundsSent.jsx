//import React, { useRef, useEffect } from 'react'
import React, { useRef, useState, forwardRef, useImperativeHandle } from "react";


import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';


const styles = theme => ({
  spacer:{
      color:'red'
  }
});


const Dashboard = forwardRef((props, ref) => {

    const divRef = useRef(null)





    return (
        <div ref ={divRef} >
          <Box textAlign='center'>
          <p></p>
          ${global.amountSent.toFixed(2)} is rocketing toward you this very moment.<p></p>
          Ready to make even more money?<p></p>
          Press the button below to choose your job.<p></p>
         
          <Button  variant="contained" color="primary" onClick={() => {global.gotoPage("Gallery")}}> View Jobs </Button>
          <h6 color="primary"  ></h6>
          {global.amount>0 && <Button  variant="contained" color="primary" onClick={() => {global.gotoPage("Payment")}}> Get Paid</Button>}
          </Box>
      </div>

    )
});

export default Dashboard