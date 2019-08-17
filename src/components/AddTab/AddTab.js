import React, {Component} from 'react';
import {createFromHandlers} from '../chromeHandlers/Tabs';
export default class AddTab extends Component{
  constructor(props){
    super(props);
    this.state = {
      name: ''
    };
    this.addName = this.addName.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }
  addName(e){
    this.setState({name: e.target.value});
  }
  async handleButtonClick(event){
    event.preventDefault();
    console.log("about to create handler with name ", this.state.name);
    createFromHandlers(this.state.name);
  }
  render(){
    return(
      <div>
        <h3>Create a new action with this url.</h3>
        <form onSubmit={this.handleButtonClick}>
          <input onChange={this.addName} placeholder="Action name" value={this.state.name}/>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
