import React, {Component} from 'react';
import Search from './Search/Search.js';
import FlowData from './FlowData/FlowData.js';

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
  getTabs(){
  window.chrome.tabs.query({currentWindow: true}, function(data){
      for(let tab of data){
        console.log(tab.url);
      }
  });
}

  render(){
    // map content inside of the flow
    // add new links to the flow
    // toggle between links
    // map all flows
    return(
      <div>
        {this.mapFlowData()}
        {this.getTabs()}
      </div>
    );
  }
}
