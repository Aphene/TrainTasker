//import React, { useRef, useEffect } from 'react'
import React, { useRef, useState, forwardRef, useImperativeHandle } from "react";


import Button from '@material-ui/core/Button';
import TextField from "@material-ui/core/TextField";


const Payment = forwardRef((props, ref) => {

const handleAddressChange= (e) => {
  global.address= e.target.value;
}



const submit= (e) => {
  global.amountSent= global.amount;
  global.amount=0;
  global.gotoPage("FundsSent");
}

const cancel= (e) => {
  global.gotoPage("Dashboard");
}

    return (
      <div>
          Request payment for ${global.amount.toFixed(2)};
          <p></p>

          Enter your Dash Address <p></p>
          Be sure to make sure it is correct. <p></p>
          
              <label>
                
              <TextField
                  id="outlined-basic"
                  label="Dash Address"
                  name="dashAddress"
                  fullWidth
                  variant="outlined"
                  onChange={handleAddressChange}
                  required
                />
              </label>

              <br />
              <br />

              <Button   variant="contained" color="primary"
                    fullWidth                    onClick={submit}
                    >
                    Submit Payment Request
              </Button>
                ....
              <Button
                    variant="contained"
                    color="secondary"
                    fullWidth
                    onClick={cancel}
                    >
                    Cancel
                </Button>
              </div>


    )
});





export default Payment