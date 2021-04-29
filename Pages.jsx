import React, { useRef, useEffect,useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Gallery from './Gallery'
import Train from './Train'
import Register from './Register'
import Dashboard from './Dashboard'
import Splash from './Splash'
import SignIn from './SignIn'
import Payment from './Payment'
import FundsSent from './FundsSent'




let timer =null;

const Pages = props => {

    const [page,setPage] = useState("Splash");


    useEffect(() => {
        if (timer===null) {
                timer = setInterval(() => {
                if (global.pages.length>0) {
                    setPage(global.pages.shift());
                }
        
            }, 200);
        }
    }, [page]);







    if (page=="Register") return <Register/>
    if (page=="Splash") return <Splash/>
    if (page=="SignIn") return <SignIn/>
    if (page=="Dashboard") return <Dashboard/>
    if (page=="Gallery") return <Gallery/>
    if (page=="Train")  return <Train/>
    if (page=="Payment")  return <Payment/>
    if (page=="FundsSent")  return <FundsSent/>

  



}

export default Pages