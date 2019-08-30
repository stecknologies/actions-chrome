import React, {Component} from 'react';
// import {createFromHandlers, addToAction} from '../chromeHandlers/Tabs';
// import {mapActions} from '../gunHandlers/ActionCRUD';
export default class AddTab extends Component{
  constructor(props){
    super(props);
    this.state = {
      value: ''
    };
    this.handleCreation = this.handleCreation.bind(this);
    this.handleAddition = this.handleAddition.bind(this);
  }
  handleChange(e){this.setState({value: e.target.value});}
  async handleCreation(event){
    event.preventDefault();
    console.log("creating new action");
    this.createFromHandlers();
    this.props.newActionName(event.target.value);
  }
  async handleAddition(event){
    event.preventDefault();
    console.log("creating new action");
    this.props.actionToAddTo(this.state.value);
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
          <input type="text" name="newAction" value={this.state.value} onChange={this.handleChange} placeholder="Name your new action"/>
        <input type="submit" value="Submit" />
      </form>
      <form onSubmit={this.handleAddition}>
        <select value={this.state.value} onChange={this.handleChange}>
          <option value="disabled">Choose an option below.</option>
          {this.props.actions != [] ? this.props.actions.map(action => <option value={action.name}>{action.name}</option>) : console.log("no choice actions to map")}
        </select>
      </form>
      </div>
    );
  }
}
