//import React, { useRef, useEffect } from 'react'
import React, { useRef, useState, forwardRef, useImperativeHandle } from "react";


import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';


const styles = theme => ({
  spacer:{
      color:'red'
  }
});

const editJob= (id) =>    {
  global.currentJob=global.jobTable[id];
  global.gotoPage("Train");
}



const Dashboard = forwardRef((props, ref) => {

    const divRef = useRef(null)


    if (global.jobs===undefined || global.jubs===null) global.jobs=[];

    global.jobTable={};
    for(let i=0;i<global.jobs.length;++i) {
      global.jobTable[global.jobs[i].ID]=global.jobs[i];
    }


    return (
        <div ref ={divRef} >
          <Box textAlign='center'>
          <p></p>
          Your account is at: {global.amount.toFixed(2)}.<p></p>
          Ready to make some money?<p></p>
          Press the button(s) below to choose your job.<p></p>


          <p></p>    
          <p></p>
          {global.jobs.length==0 && "No current Jobs are available."}
          {global.jobs.map(job => (
              <div>
              <p></p>
              <Button  variant="contained" color="secondary" onClick={() => {editJob(job.ID)}}> {job.title} </Button>
              </div>
            
          ))}
         
         <p></p>    
          <p></p>
          <h6 color="primary"  ></h6>
          {global.amount>0 && <Button  variant="contained" color="primary" onClick={() => {global.gotoPage("Payment")}}> Get Paid</Button>}
          </Box>
      </div>

    )
});

export default Dashboard