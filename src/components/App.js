import '../assets/css/App.css'
import React, {Component} from 'react';
import AddTab from './AddTab/AddTab';
//import DisplayActions from './DisplayActions/DisplayActions';
import Action from './DisplayActions/Action/Action';

export default class App extends Component{
  constructor(props){
    super(props);
      this.state = {
        actions: [],
        actionToAppend: '',
        newActionName: ''
      };
    console.log(this.state.actions);
    this.createAction = this.createAction.bind(this);
  }
  createAction = (tab, name) => {
      var allTabs = [tab];
      var actions = [];
      var action = {
        name: this.state.newActionName,
        created_at: new Date().toISOString(),
        tabs: allTabs
      };
      if('actions' in localStorage){
        actions = JSON.parse(localStorage.getItem('actions'));
      }
      else{
        actions = [];
      }
      actions.push(action);
      this.state.actions.push(action);
      console.log(this.state.actions);
      localStorage.setItem('actions', JSON.stringify(actions));
      this.forceUpdate();
  }
  selectedAction = (action) => {
    this.setState({actionToAppend: action});
  }
  postNewActionName = (actionName) => {
    this.setState({newActionName: actionName});
  }
  addToAction = (tab) => {
    var actions = JSON.parse(localStorage.getItem('actions'));
    var action = this.state.actionToAppend;
    var actionIndex = actions.map(function(e) { return e.name; }).indexOf(action);
    console.log(actionIndex);
    var tabs = actions[actionIndex]['tabs'];
    tabs.push(tab);
    actions[actionIndex]['tabs'] = tabs;
    localStorage.setItem('actions', JSON.stringify(actions));
    this.forceUpdate();
  }
  deleteAction = (action) => {
    var actions = JSON.parse(localStorage.getItem('actions'));
    var actionIndex = actions.map(function(e) { return e.name; }).indexOf(action);
    actions.splice(actionIndex, 1);
    localStorage.setItem('actions', JSON.stringify(actions));
    this.setState({actions: actions});
    console.log(action + " deleted");
    if(localStorage.getItem('actions').includes('null')){
      localStorage.removeItem('actions');
    }
    this.forceUpdate();
  }
  componentDidMount(){
    if('actions' in localStorage){
      this.setState({
        actions: JSON.parse(localStorage.getItem('actions'))
      });
      console.log(this.state.actions);
      console.log(JSON.parse(localStorage.getItem('actions')));
    }
    else{
      console.log("is null cdm");
      console.log(JSON.parse(localStorage.getItem('actions')));
    }
  }
  render(){
    return(
      <div>
        <AddTab currentTab={this.createAction} tabData={this.addToAction} actionToAddTo={this.selectedAction} actions={this.state.actions} newActionName={this.postNewActionName}/>
        <h1>Actions</h1>
        {this.state.actions != [] ? this.state.actions.map(element => <Action name={element.name} isOpen={element.isOpen} tabs={element.tabs} handleDeletion={this.deleteAction}/>) : <h3>No actions. Create one!</h3>}
      </div>
    );
  }
}
