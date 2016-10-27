var React = require('react');
import {render} from 'react-dom';
import Player from './Player';
import ScoresTable from './ScoresTable';

class Main extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			lastScore:0
		}

	}

	// Gets new score and updates Scores
	getScore(data) {
		// Add score and player data to store 
		this.props.addScore(data.score, data.name, data.comment);

		
	}

	render () {
		return (
				<div className="mainContainer alert alert-warning">
 				  <Player whenEnding={this.getScore.bind(this)} />
				  <ScoresTable {...this.props} />
				</div>
			)
	}
}

Main.porpTypes = {
	addScore: React.PropTypes.func.isRequired
};

export default Main;