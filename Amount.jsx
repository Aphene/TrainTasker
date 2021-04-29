import React, { useEffect, useState, forwardRef, useImperativeHandle } from "react";
let amountTimer=null

const Amount = forwardRef((props, ref) => {

    const [amount,setAmount] = useState(0);


    useEffect(() => {
        if (amountTimer==null) {
            amountTimer = setInterval(() => {
                setAmount(global.amount);
        
            }, 200);
        }

    }, [amount]);


   return <div><h3> Amount {global.amount.toFixed(2)}</h3></div>
});

export default Amount