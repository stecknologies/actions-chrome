import '../assets/css/App.css'
import React, {Component} from 'react';
import Flow from './Flow/Flow.js';
import Sidebar from './Sidebar/Sidebar.js'
// import {BrowserRouter as HashRouter, Route, Redirect, Switch} from "react-router-dom";

export default class App extends Component{
  constructor(props){
    super(props);
    this.checkCurrentFlow = this.checkCurrentFlow.bind(this);
  }
  checkCurrentFlow(){
    let flowLS = localStorage.getItem('currentFlow');
    if(flowLS){
      return <Flow/>

    }
    else{
      return <p>No current flow</p>
    }
  }
  render(){
    // I left the router code for now because I'll need it at some point, but I don't actually need it right now.
    return(
    <div>
       {/*<HashRouter basename="/">
        <Switch>
        */}
      <Sidebar />
      {this.checkCurrentFlow()}
      {/*<Route exact path="/" component={Sidebar} />
        <Route path="/flow" component={Flow} />
        </Switch>
      </HashRouter>
      */}
    </div>
    );
  }
}
