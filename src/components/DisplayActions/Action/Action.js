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
	deleteTab(event){
		event.preventDefault();
		this.props.handleTabDeletion(this.props.tabs)
	}
	render(){
		return(
			<div>
				<h3>{this.props.name}</h3><form onSubmit={this.deleteAction}><input type="submit" value="Delete action"/></form>
				<h6>Tabs</h6>
				<ul>{this.props.tabs.map(tab => <li><a href={tab.url}>{tab.title}</a><form onSubmit={this.deleteTab}><input type="submit" value="Delete tab"/></form></li>)}</ul>
			</div>
		);
	}
}
