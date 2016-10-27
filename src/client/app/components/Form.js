var React = require('react');

class Form extends React.Component {
	constructor(props){
		super(props);
	}
	handleSubmit(e){
        e.preventDefault();
        // IMPORTANT TO ESCAPE HTML ENTITIES!

		const data = {
			name: this.refs.name.value,
			comment: this.refs.comment.value
		};
		
		// Send form data to parent
		this.props.onSubmitEvent(data);
	}
	render(){
		return (
			<form onSubmit={this.handleSubmit.bind(this)}>
				<input ref="name" placeholder="Your name?" type="text" />
				<textarea ref="comment" placeholder="What did this match meant to you?">
				</textarea>
				<button className="btn btn-lg btn-danger" type="submit">Send Score</button>
			</form>
		);
	}
}

Form.propTypes = {
	onSubmitEvent: React.PropTypes.func.isRequired
}

export default Form;