import React, {Component} from 'react';
import Search from './Search/Search.js';
import FlowData from './FlowData/FlowData.js';
import {getTabData} from '../chromeHandlers/Tabs.js';

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
  render(){
    const data = getTabData();
    console.log(data);
    return(
      <div>
        {this.mapFlowData()}
      </div>
    );
  }
}
