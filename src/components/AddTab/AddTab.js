import React, {Component} from 'react';
import {currentTabData} from '../chromeHandlers/Tabs';
import {createAction} from '../gunHandlers/ActionCRUD';
export default class AddTab extends Component{
  constructor(props){
    super(props);
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }
  async handleButtonClick(){
    const tab  = await currentTabData().then(function(data){
      return [data.title, data.url, data.index];
    });
    console.log(tab);
    createAction("My first test action", tab);
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
