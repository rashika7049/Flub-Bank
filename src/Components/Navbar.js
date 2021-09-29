import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import  './Nav.css';
import logo from '../images/logo6.png';
 


const Navbar = () =>{
    return(
        
        <>
        
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">

    <div class="sam">
      <img style={{fontSize: 20}} src = {logo} alt ="logo" /><b> Flub-Waste Bank</b>
      </div>

    <a class="navbar-brand" href="#"></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <h1 style={{paddingLeft:"58%" }}></h1>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ml-auto">
      <li class="nav-item">
          <a class="nav-link" href="https://www.dreamhatcher.in/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="https://www.dreamhatcher.in/">Register</a>
        </li>
        

        <li class="nav-item Contact">
    <a class="nav-link Contact-toggle" href="#" id="navbarContact" role="button" data-bs-toggle="Contact" aria-expanded="false">
            Contact
          </a>
          
            
          
        </li>
        
      </ul>
      

     
    </div>
  </div>
</nav>
       </>
    )
    
}

export default Navbar;