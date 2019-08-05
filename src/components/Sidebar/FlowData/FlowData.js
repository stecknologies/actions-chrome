import React, {Component} from 'react';
import CurrentFlow from './CurrentFlow/CurrentFlow.js';
// import FlowList from './FlowList/FlowList.js';
export default class FlowData extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div>
        <CurrentFlow/>
      </div>
    );
  }
}
