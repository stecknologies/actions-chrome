import '../../assets/css/App.css'
import React, {Component} from 'react';
import {getCurrentFlowUrl} from '../gunHandlers/FlowCRUD.js';

export default class FlowInstance extends Component {
  constructor(props){
  	super(props);
    this.state={
      url: getCurrentFlowUrl()
    };
  }
  render(){
    return(
      <div>
        <h3>webview {this.state.url}</h3>
      </div>
    );
  }
}
