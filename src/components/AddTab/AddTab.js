import React, {Component} from 'react';
import {createFromHandlers, addToAction} from '../chromeHandlers/Tabs';
import {mapActions} from '../gunHandlers/ActionCRUD';
export default class AddTab extends Component{
  constructor(props){
    super(props);
    this.state = {
      actions: mapActions()
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  async handleSubmit(event){
    event.preventDefault();
    console.log(event.target);
    // if(event.target.value == "create"){
    //   console.log("creating new action");
    //   createFromHandlers();
    // }
    // else{
    //   console.log("about to add this tab to action ", event.target.value);
    //   addToAction(event.target.value);
    // }
  }
  render(){
    return(
      <div>
        <h3>Add this tab to an action or create a new one.</h3>
        <form onSubmit={this.handleSubmit}>
          <select>
            <optgroup label="Choose an option">
              <option value="create">Create new action</option>
              {this.state.actions.map(action => <option value={action.name}>{action.name}</option>)}
            </optgroup>
          </select>
        <input type="submit" value="Submit" />
      </form>
      </div>
    );
  }
}
