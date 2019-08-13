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
    var tabs = [];
    const data = await doTabsStuff().then(function(d){
      for(let i=0; i< d.length; i++){
        tabs.push(d[i]['title']);
      }
    });
    return await tabs.map(i => i);
  }

  render(){
    console.log(this.getData());
    return(
      <div>
        {this.mapFlowData()}
      </div>
    );
  }
}
