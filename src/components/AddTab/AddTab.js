import React, {Component} from 'react';
import {createFromHandlers} from '../chromeHandlers/Tabs';
import DisplayActions from '../DisplayActions/DisplayActions';
export default class AddTab extends Component{
  constructor(props){
    super(props);
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }
  async handleButtonClick(){
    createFromHandlers("yay yay yay");
  }
  render(){
    return(
      <div>
        <h3>Create a new action with this url.</h3>
        <button onClick={this.handleButtonClick}>Create</button>

        <DisplayActions />
      </div>
    );
  }
}
