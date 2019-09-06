import '../assets/css/App.css';
import '../assets/css/bootstrap.css'
import React, {Component} from 'react';
import AddTab from './AddTab/AddTab';
import Action from './DisplayActions/Action/Action';
// import ReactGA from 'react-ga';

export default class App extends Component{
  constructor(props){
    super(props);
      this.state = {
        actions: [],
        actionToAppend: '',
        newActionName: ''
      };
    console.log(this.state.actions);
    this.selectedAction = this.selectedAction.bind(this);
    this.postNewActionName = this.postNewActionName.bind(this);
    this.createAction = this.createAction.bind(this);
  }
  selectedAction = (action) => {
    this.setState({actionToAppend: action});
  }
  postNewActionName = (actionName) => {
    this.setState({newActionName: actionName});
  }
  createAction = (tab) => {
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
  addToAction = (tab) => {
    var actions = JSON.parse(localStorage.getItem('actions'));
    var action = this.state.actionToAppend;
    var actionIndex = actions.map(function(e) { return e.name; }).indexOf(action);
    console.log(actionIndex);
    var tabs = actions[actionIndex]['tabs'];
    tabs.push(tab);
    actions[actionIndex]['tabs'] = tabs;
    localStorage.setItem('actions', JSON.stringify(actions));
    this.setState({actions: actions});
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
  deleteTab = (tab, action) => {
    var actions = JSON.parse(localStorage.getItem('actions'));
    var actionIndex = actions.map(function(e) { return e.name; }).indexOf(action);
    console.log(actionIndex);
    var tabs = actions[actionIndex]['tabs'];
    console.log(tabs);
    var tabIndex = tabs.map(function(e) { return e.title; }).indexOf(tab);
    actions[actionIndex]['tabs'].splice(tabIndex, 1);
    localStorage.setItem('actions', JSON.stringify(actions));
    this.setState({actions: actions});
    console.log(tab + " tab deleted");
    if(localStorage.getItem('actions').includes('null')){
      localStorage.removeItem('actions');
    }
    this.forceUpdate();
  }
  componentDidMount(){
    if(localStorage.getItem('actions') == "[]" || localStorage.getItem('actions') == "null"){
      localStorage.removeItem('actions');
    }
    else if('actions' in localStorage){
      this.setState({
        actions: JSON.parse(localStorage.getItem('actions'))
      });
      console.log(this.state.actions);
      console.log(JSON.parse(localStorage.getItem('actions')));
    }
    else{
      console.log("is null cdm");
      localStorage.removeItem('actions');
      console.log(JSON.parse(localStorage.getItem('actions')));
    }
    // ReactGA.initialize('UA-147084998-2');
    // ReactGA.pageview(window.location.pathname + window.location.search);
    // console.log(window.location.pathname + window.location.search);
  }
  render(){
    return(
      <div className="app">
        <AddTab currentTab={this.createAction} tabData={this.addToAction} actionToAddTo={this.selectedAction} actions={this.state.actions} newActionName={this.postNewActionName}/>
        <br/><br/>
        <h3>Actions</h3>
        {this.state.actions != [] ? this.state.actions.map(element => <Action name={element.name} isOpen={element.isOpen} tabs={element.tabs} handleDeletion={this.deleteAction} handleTabDeletion={(tab) => {this.deleteTab(tab, element.name)}}/>) : <h3>No actions. Create one!</h3>}
      </div>
    );
  }
}
