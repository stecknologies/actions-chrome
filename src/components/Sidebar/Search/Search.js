import React, {Component} from 'react';
import {createFlow} from '../../gunHandlers/FlowCRUD.js'
export default class Search extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      searchQuery:''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }
  handleChange(e){
    this.setState({
      searchQuery: e.target.value
    });
  }
  handleSearch(event){
    event.preventDefault();
    try{
      new URL(this.state.searchQuery);
      // don't need to push any more data to the parent because I just send it to flow instance
      this.setState({searchQuery: ''});
      console.log("link success");

      let flowName = "newer flow"
      createFlow(flowName, this.state.searchQuery, this.state.searchQuery);
      this.forceUpdate();

    }
    catch(error){
      this.setState({
        searchQuery: ''
      }).bind(this);
      alert(error);
    }
  }

  render(){
    return(
      <div>
        <p><b>Create a new flow.</b></p>
        <form onSubmit={this.handleSearch}>
          <input type="text" value={this.state.searchQuery} onChange={this.handleChange}/>
          <input type="submit" value="Submit"/>
        </form>
        <h1>Welcome to Humane</h1>
        <p>Humane helps you become a smarter browser. We help you organize specific tasks so you can be as efficient as possible.</p>
        <p>To start, click the Humane button next to your search bar and begin selecting tabs.</p>
      </div>
    );
  }
}
