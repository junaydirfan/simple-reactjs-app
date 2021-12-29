import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Customers from './Customers'
import { Link ,BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';




function Home() {


  return (
<Link to="/customers" className="btn btn-primary">Customers</Link>
  );
}

export default Home;