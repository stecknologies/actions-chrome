import '../assets/css/App.css'
import React, {Component} from 'react';
import AddTab from './AddTab/AddTab';
import DisplayActions from './DisplayActions/DisplayActions';

export default class App extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div>
        <AddTab />
        <DisplayActions />
      </div>
    );
  }
}
