import React, {Component} from 'react';
import {focusOnAction} from '../chromeHandlers/Tabs';
export default class Focus extends Component{
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(){
    console.log("going to focus on action");
    focusOnAction();
  }
  render(){
    return(
      <div>
        <button onClick={handleClick}>Focus on action</button>
      </div>
    );
  }
}
