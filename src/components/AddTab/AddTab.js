import React, {Component} from 'react';
// import {createFromHandlers, addToAction} from '../chromeHandlers/Tabs';
// import {mapActions} from '../gunHandlers/ActionCRUD';
export default class AddTab extends Component{
  constructor(props){
    super(props);
    this.state = {
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
      this.createFromHandlers();
    }
    else{
      console.log("about to add this tab to action ", this.state.value);
      this.props.actionToAddTo(this.state.value);
      this.addFromHandlers();
    }
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
        <form onSubmit={this.handleSubmit}>
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="disabled">Choose an option below.</option>
            <option value="create">Create new action</option>
            {this.props.actions != [] ? this.props.actions.map(action => <option value={action.name}>{action.name}</option>) : console.log("no choice actions to map")}
          </select>
        <input type="submit" value="Submit" />
      </form>
      </div>
    );
  }
}
