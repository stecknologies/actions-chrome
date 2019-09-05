import React, {Component} from 'react';

export default class Action extends Component{
	constructor(props){
		super(props);
		this.deleteAction = this.deleteAction.bind(this);
	}
  deleteAction(event){
		event.preventDefault();
		this.props.handleDeletion(this.props.name);
	}
	deleteTab(event, tabTitle){
		event.preventDefault();
		console.log("Deleting " + tabTitle + " from " + this.props.name);
		this.props.handleTabDeletion(tabTitle);
	}
	render(){
		return(
			<div className="card action">
  			<div className="card-body">
    		<h5 className="card-title">{this.props.name}</h5>
				<form onSubmit={this.deleteAction}>
					<input className="btn btn-danger" type="submit" value="Delete action" />
				</form>
				<br/>
  			<p>Tabs</p>
				<div className="list-group">
				{this.props.tabs.map(tab => <div className="list-group-item list-group-item-action"><a href={tab.url} target="_blank">{tab.title}    </a><b><span onClick={(e) => {this.deleteTab(e)}}>x</span></b></div>)}
			</div>
  </div>
</div>
		);
	}
}
