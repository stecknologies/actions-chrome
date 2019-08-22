import React from 'React';

function Action(props){
	return(
		<div>
			<h3>{props.name}</h3><small>{props.isOpen ? "Active" : ""}</small>
			<h6>Tabs</h6>
			{Object.keys(props.tabs).map(tab => <a href={props.tabs[tab].url}>{props.tabs[tab].title}</a>)}
		</div>
	);
}
export default Action;