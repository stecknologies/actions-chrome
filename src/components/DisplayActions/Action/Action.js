import React from 'React';

function Action(props){
	return(
		<div>
			<h3>{props.name}</h3><small>{props.isOpen ? "Active" : ""}</small>
			<a href={props.tabs.url} target="_blank">
				<p>{props.tabs.title}</p>
			</a>
		</div>
	);
}
export default Action;