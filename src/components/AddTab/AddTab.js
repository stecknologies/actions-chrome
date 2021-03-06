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

  mapAddToAction(){
   if('actions' in localStorage){
      return(
        <div>
        <form onSubmit={this.handleAddition}>
          <h5>Add this tab to an existing action</h5>
          <select value={this.state.addValue} onChange={this.handleAddValueChange}>
            <option value="disabled">Choose an option below.</option>
            {this.props.actions.map(action => <option value={action.name}>{action.name}</option>)}
          </select>
          <input type="submit" value="Add to action" className="btn btn-primary" />
        </form>
        <br/>
        </div>
      );
    }
  }
  showProperMessage(){
    if('actions' in localStorage){
      console.log("no message")
    }
    else{
      return(
        <div className="introText">
          <h2>Welcome to Actions</h2>
          <p>Easily group and track your tasks online.</p>
          <p>Simply create an action and add tabs to it.</p><br/>
        </div>
      )
    }
  }
  render(){
    return(
      <div className="addTab">
        {this.showProperMessage()}
        <form onSubmit={this.handleCreation}>
          <h5>Create a new action</h5>
          <input className="form-control" type="text" name="newAction" value={this.state.createValue} onChange={this.handleCreateValueChange} placeholder="Name"/>
          <input type="submit" value="Create" className="btn btn-primary" />
        </form>
        <br/>
        {this.mapAddToAction()}
      </div>
    );
  }
}
