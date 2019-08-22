import React from 'React';

function Action(props){
	return(
		<div>
			<h3>{props.name}</h3><small>{props.isOpen ? "Active" : ""}</small>
			<a href="x" target="_blank">
				<p>{props.name}</p>
			</a>
		</div>
	);
}
export default Action;