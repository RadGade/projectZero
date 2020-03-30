import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useLocation
} from "react-router-dom";
import Login  from './components/login';
import Freinds from './components/freinds';
import './components/css/App.css'
import {Header} from './components/header'
import VidCall from './logic/p2p-logic/vid-call'

export class App extends Component {
  render() {
    return (
      <div>
      <Header />
        <Route exact path="/vid-call" component={VidCall} />
        <Route exact path="/" component={Login}/>
        <Route exact path="/home" component={Freinds}/>
      </div>
    )
  }
}

export default App
