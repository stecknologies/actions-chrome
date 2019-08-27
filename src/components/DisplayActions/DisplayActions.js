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
      {actions.length > 0 ? actions.map(element => <Action name={element.name} isOpen={element.isOpen} tabs={element.tabs}/>) : <h3>No actions. Create one!</h3>}
    </div>
  );
}
export default DisplayActions;
