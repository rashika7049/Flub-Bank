import React from 'react';
import './signin.css';
import { TextField,Button, Divider } from '@material-ui/core';
import {link} from "react-router-dom";
// import logo from './logo193.png';
import logo from './logo193.png';

 
const Signup = () =>{
     return(
      <div className="app">
          <div className="icon">
              <div className="icon_class"></div>
              <div className="text">Login</div>
           </div>
           {/* <div class ="Rashika">
             <img src = "Desktop\react\myapp\src\images"  alt="nthing">
             
               </div> */}

          {/*<div className="row m-2">
              <div className="col-6 p-2">
                <TextField id="firstname" type="text" variant="outlined" label="Enter Name" fullWidth/>
              </div>
              <div className="col-6 p-2">
              <TextField id="lastname" type="text" variant="outlined" label="Enter Last Name" fullWidth/>
              </div>
           </div>*/}

          <div className="row m-2">
          
          <TextField id="email" className="p-2" type="text" variant="outlined" label="Enter Email" fullWidth/>
          <TextField id="Password" className="p-2"  type="text" variant="outlined" label="Enter Password" fullWidth/>
          <button variant="container" className="p-2" color="primary">LOGIN</button>
          </div>
          {/*<Divider variant="middle" />
         <p className="text-center">
              <link to="\Components\Navbar" className="text-black-r50">Already has an Account?</link>
     </p> */}
      </div>

     ) 
   

};

export default Signup;