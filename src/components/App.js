import '../assets/css/App.css'
import React, {Component} from 'react';
import AddTab from './AddTab/AddTab';
//import DisplayActions from './DisplayActions/DisplayActions';
import Action from './DisplayActions/Action/Action';

export default class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      actions: JSON.parse(localStorage.getItem('actions')),
      actionToAppend: ''
    };
    console.log(this.state.actions);
    this.createAction = this.createAction.bind(this);
  }
  createAction = (tab) => {
      var allTabs = [tab];
      var actions = [];
      var action = {
        name: tab['title'],
        created_at: new Date().toISOString(),
        tabs: allTabs
      };
      this.state.actions.push(action);
      if(localStorage.getItem('actions')){
        actions = JSON.parse(localStorage.getItem('actions'));
      }
      else{
        actions = [];
      }
      actions.push(action);
      localStorage.setItem('actions', JSON.stringify(actions));
      this.forceUpdate();
  }
  selectedAction = (action) => {
    this.setState({actionToAppend: action});
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
    delete actions[actionIndex];
    localStorage.setItem('actions', JSON.stringify(actions));
    this.setState({actions: actions});
    console.log(action + " deleted");
    this.forceUpdate();
  }
  componentDidMount(){
    if(localStorage.getItem('actions')){
      this.setState({
        actions: JSON.parse(localStorage.getItem('actions'))
      });
    }
  }
  render(){
    return(
      <div>
        <AddTab currentTab={this.createAction} tabData={this.addToAction} actionToAddTo={this.selectedAction}/>
        <h1>Actions</h1>
        {this.state.actions != null ? this.state.actions.map(element => <Action name={element.name} isOpen={element.isOpen} tabs={element.tabs} handleDeletion={this.deleteAction}/>) : <h3>No actions. Create one!</h3>}
      </div>
    );
  }
}
