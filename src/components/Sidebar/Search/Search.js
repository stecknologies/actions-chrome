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
      // const Webshrinker = require("webshrinker");
      // const webshrinker = new Webshrinker({key: "zxdItL2xcLDc09TcjdLY", secret: "n4sdz9CewfazRDjwjWy7"});
      // const results = webshrinker.getCategories(this.state.input);
      // console.log(results);

    }
    catch(error){
      this.setState({
        searchQuery: ''
      });
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
      </div>
    );
  }
}
