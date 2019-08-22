import React, {Component} from 'react';
import {createFromHandlers, addToAction} from '../chromeHandlers/Tabs';
import {mapActions} from '../gunHandlers/ActionCRUD';
export default class AddTab extends Component{
  constructor(props){
    super(props);
    this.state = {
      actions: mapActions(),
      value: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e){this.setState({value: e.target.value});}
  async handleSubmit(event){
    event.preventDefault();
    console.log("State", this.state.value);
    if(this.state.value == "disabled"){
      alert("Please choose a valid response and try again.");
    }
    else if(this.state.value == "create"){
      console.log("creating new action");
      createFromHandlers();
    }
    else{
      console.log("about to add this tab to action ", this.state.value);
      addToAction(this.state.value);
    }
  }
  render(){
    return(
      <div>
        <h3>Add this tab to an action or create a new one.</h3>
        <form onSubmit={this.handleSubmit}>
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="disabled">Choose an option below.</option>
            <option value="create">Create new action</option>
            {this.state.actions.map(action => <option value={action.name}>{action.name}</option>)}
          </select>
        <input type="submit" value="Submit" />
      </form>
      </div>
    );
  }
}
