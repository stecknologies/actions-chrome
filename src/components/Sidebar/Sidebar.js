import React, {Component} from 'react';
import Search from './Search/Search.js';
import FlowData from './FlowData/FlowData.js';
import {doTabsStuff} from '../chromeHandlers/Tabs.js';

export default class Sidebar extends Component{
  constructor(props){
    super(props);
  }
  mapFlowData(){
    if(localStorage.getItem('currentFlow'))
    {
      return <FlowData />
    }
    else{
      return <Search/>
    }
  }

  async getData(){
    await doTabsStuff();
  }
  componentDidMount(){
    console.log(this.getData());
  }
  render(){
    return(
      <div>
        {this.mapFlowData()}
      </div>
    );
  }
}
