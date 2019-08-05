import '../assets/css/App.css'
import React, {Component} from 'react';
import Flow from './Flow/Flow.js';
import Sidebar from './Sidebar/Sidebar.js'

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
    return(
    <div>
      <Sidebar />
      {this.checkCurrentFlow()}
    </div>
    );
  }
}
