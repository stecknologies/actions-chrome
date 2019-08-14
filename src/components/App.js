import '../assets/css/App.css'
import React, {Component} from 'react';
import AddTab from './AddTab/AddTab.js';

export default class App extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <AddTab />
    );
  }
}
