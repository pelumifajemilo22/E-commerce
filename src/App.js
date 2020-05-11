import  React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import logo from "./logo.svg";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from './components/NavBar';
import Productlist from './components/Productlist';
import Cart from './components/Cart/Cart';
import Details from './components/Details';
import Default from './components/Default';
import Modal from './components/Modal'

class App extends Component {
 
  render() { 
    return (<>
    <NavBar/>
    <Switch>
    <Route exact path="/" component={Productlist}/>
    <Route exact path="/details" component={Details}/>
    <Route exact path="/cart" component={Cart}/>
    <Route component={Default}/>
    </Switch>
    <Modal/>
    </> );
  }
}
 
export default App;
