import React, {Component} from 'react';
import {mapFlowInstance} from '../../../gunHandlers/FlowCRUD.js';

export default class CurrentFlow extends Component{
  constructor(props){
    super(props);
    this.state = {
      flowData: mapFlowInstance()['flow'],
      urlData: mapFlowInstance()['url']
    }
  }
  render(){
    return(
      <div>
        <h3>Flow named {this.state.flowData['name']}</h3>
        <small><i>Created at {this.state.flowData['createdAt']}</i></small>
        <h3>Url in flow is {this.state.urlData['siteName']}</h3>
      </div>
    );
  }
}
