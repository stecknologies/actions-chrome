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
  async getResponse(){
    const foo  = await getTabData().then(data => data);
    return foo;
  }
  mapContent(data){
    console.log(data);
    return data.map(i => <li>{i.title}</li>);
  }
  render(){
    return(
      <div>
        {this.mapFlowData()}
        <ul>{this.mapContent(this.getResponse())}</ul>
      </div>
    );
  }
}
