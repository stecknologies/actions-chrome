import React, {Component} from 'react';
import {mapActions} from '../gunHandlers/ActionCRUD';
export default class DisplayActions extends Component{
  constructor(props){
    super(props);
    this.listItemPerAction = this.listItemPerAction.bind(this);
  }

  listItemPerAction(){
    if(mapActions().length > 0){
      console.log("length > 0 ", mapActions())
      return mapActions().map(action => <li key={action.id}>{action.name}</li>);
    }
    else{
      return <h3>There are no actions to display. Create one!</h3>
    }
  }


  render(){
    return(
      <div className="action">
      <h1>Actions
        <ul>{this.listItemPerAction()}</ul>
      </h1>
      </div>
    );
  }
}
