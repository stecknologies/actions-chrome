import React from 'react';
import Gun from 'gun/gun';
import {mapActions} from '../gunHandlers/ActionCRUD';
import Action from './Action/Action';
function DisplayActions(){
  const actions = mapActions();
  console.log(actions);
  return(
    <div className="action">
      <h1>Actions</h1> 
      {actions.map(element => <Action name={element.name} isOpen={element.isOpen} tabs={element.tabs}/>)}
    </div>
  );
}
export default DisplayActions;
