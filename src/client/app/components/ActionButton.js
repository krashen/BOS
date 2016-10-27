var React = require('react');

const ActionButton = (props)=>{
	let className="btn btn-lg " + props.bootstrapClass;
	return(
		<button className={className} onClick={()=>props.onClickEvent(props.pred)}>{props.innerText}</button>
	)
};

ActionButton.porpTypes = {
	onClickEvent: React.PropTypes.func.isRequired,
	innerText: React.PropTypes.string.isRequired,
	pred: React.PropTypes.string.isRequired,
	bootstrapClass: React.PropTypes.string
};

export default ActionButton;
