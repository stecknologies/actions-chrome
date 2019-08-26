import React from 'React';

function Action(props){
	return(
		<div>
			<h3>{props.name}</h3><small>{props.isOpen ? "Active" : ""}</small>
			<h6>Tabs</h6>
			{props.tabs.map(tab => <a href={tab.url}>{tab.url}</a>)}
		</div>
	);
}
export default Action;