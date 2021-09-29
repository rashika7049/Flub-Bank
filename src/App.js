import React  from 'react';
//import logo from './logo.jpg';
import Navbar from './Components/Navbar';
import Signup from './Signup';
import './signin.css';
import Login from './Login';
import './App.css';
import { Switch, Route } from "react-router-dom";
import { Container } from '@material-ui/core';
const App = () => { 
	return (
		<>
<Navbar/>
		<Signup/>
		</>
	)
}; 
		   	
export default App;