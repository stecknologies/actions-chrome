import React, {Component} from 'react';
import {createFromHandlers} from '../chromeHandlers/Tabs';
export default class AddTab extends Component{
  constructor(props){
    super(props);
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }
  async handleButtonClick(){
    createFromHandlers("My first test action");
  }
  render(){
    return(
      <div>
        <h3>Create a new action with this url.</h3>
        <button onClick={this.handleButtonClick}>Create</button>
      </div>
    );
  }
}
