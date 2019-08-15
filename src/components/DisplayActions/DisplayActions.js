import React, {Component} from 'react';
import {mapActions} from '../gunHandlers/ActionCRUD';
export default class DisplayActions extends Component{
  constructor(props){
    super(props);
    mapActions();
  }

  render(){
    return(
      <div>

      </div>
    );
  }
}
