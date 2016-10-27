var React = require('react');

const ActionButton = (props)=>{
	return(
		<button className={props.addClass} onClick={()=>props.onClickEvent(props.pred)}>{props.innerText}</button>
	)
};

ActionButton.porpTypes = {
	onClickEvent: React.PropTypes.func.isRequired,
	innerText: React.PropTypes.string.isRequired,
	pred: React.PropTypes.string.isRequired,
	addClass: React.PropTypes.string
};

export default ActionButton;
