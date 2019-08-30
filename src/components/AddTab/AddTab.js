import React, {Component} from 'react';
// import {createFromHandlers, addToAction} from '../chromeHandlers/Tabs';
// import {mapActions} from '../gunHandlers/ActionCRUD';
export default class AddTab extends Component{
  constructor(props){
    super(props);
    this.state = {
      createValue: '',
      addValue: ''
    };
    this.handleCreateValueChange = this.handleCreateValueChange.bind(this);
    this.handleAddValueChange = this.handleAddValueChange.bind(this);
    this.handleCreation = this.handleCreation.bind(this);
    this.handleAddition = this.handleAddition.bind(this);
  }
  handleCreateValueChange(e){this.setState({createValue: e.target.value});}
  handleAddValueChange(e){this.setState({addValue: e.target.value});}
  async handleCreation(event){
    event.preventDefault();
    console.log("creating new action", this.state.createValue);
    this.props.newActionName(this.state.createValue);
    this.createFromHandlers();
  }
  async handleAddition(event){
    event.preventDefault();
    console.log("adding to action");
    this.props.actionToAddTo(this.state.addValue);
    this.addFromHandlers();
  }

  createFromHandlers(){
    var promise = new Promise((resolve, reject) => {
     //setTimeout(2000);
      window.chrome.tabs.getSelected(null, resolve);
    });
    promise.then(d=> this.sendCurrentTab(d));
  }
  addFromHandlers(){
    var promise = new Promise((resolve, reject) => {
      window.chrome.tabs.getSelected(null, resolve);
    });
    promise.then(data => this.sendTabData(data));
  }
  sendCurrentTab(tab){
    this.props.currentTab(tab);
  }
  sendTabData(tab){
    this.props.tabData(tab);
  }


  render(){
    return(
      <div>
        <h3>Add this tab to an action or create a new one.</h3>
      <form onSubmit={this.handleCreation}>
        <label for="newAction">Name your new action</label>
        <input type="text" name="newAction" value={this.state.createValue} onChange={this.handleCreateValueChange}/>
        <input type="submit" value="Create" />
      </form>
      <form onSubmit={this.handleAddition}>
        <select value={this.state.addValue} onChange={this.handleAddValueChange}>
          <option value="disabled">Choose an option below.</option>
          {this.props.actions != [] ? this.props.actions.map(action => <option value={action.name}>{action.name}</option>) : console.log("no choice actions to map")}
        </select>
        <input type="submit" value="Add to action" />
      </form>
      </div>
    );
  }
}
