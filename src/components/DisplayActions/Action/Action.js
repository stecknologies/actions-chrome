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
	render(){
		return(
			<div>
				<h3>{this.props.name}</h3><form onSubmit={this.deleteAction}><input type="submit" value="Delete action"/></form>
				<h6>Tabs</h6>
				{this.props.tabs.map(tab => <a href={tab.url}>{tab.title}</a>)}
			</div>
		);
	}
}
