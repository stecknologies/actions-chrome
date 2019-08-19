import React, {Component} from 'react';
import {mapActions} from '../gunHandlers/ActionCRUD';
export default class DisplayActions extends Component{
  constructor(props){
    super(props);
  }

  listItemPerAction(){
    let actions = mapActions();
    if(actions.length > 0){
      for(var i=0; i<actions.length; i++){
        console.log(actions[i]);
      }
    }
    else{
     console.log("none");
      }
  }

  render(){
    this.listItemPerAction();
    return(
      <div className="action">
        <h1>Actions</h1>
      </div>
    );
  }
}
