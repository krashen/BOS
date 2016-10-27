var React = require('react');
import ActionButton from './ActionButton';
import Lives from './Lives';
import Form from './Form';

class Player extends React.Component {
	constructor(props) {
		super(props);
		this.state = this.setInitialState()
	}

	// Initial values
	setInitialState() {
		return {
			previousNumber: null,
			currentNumber: this.randomize(),
			score: 0,
			lives:3,
			playingMode:true
		}
	}

	componentWillMount() {
		this.compare();
	}

	// Where the game logic sits and wild things are
	compare(prediction = 'virgin') {
		
		// Stores old value
		let previousNumber = this.state.currentNumber;

		// Generates and stores new value
		let currentNumber = this.randomize(previousNumber);

		if (prediction === 'bigger' && (currentNumber > previousNumber)) {
			this.predictedCorrectly();
		} else if (prediction === 'smaller' && (currentNumber < previousNumber)){
			this.predictedCorrectly();
		} else {
			// If 'virgin' nothing happens, if not, player didn't predict
			if (prediction !== 'virgin') {
				this.predictedIncorrectly();
			}
		}

		// Assign new values to the state to update the view
		this.setState({
			currentNumber: currentNumber,
			previousNumber: previousNumber
		});

	}

	// 1 life up when getting %10 points
	increaseLives(s) {

		if(s % 10 ===0){
			this.setState({
				lives: this.state.lives + 1
			});
		}	
	}

	// Player predicted correctly
	predictedCorrectly() {

		let newScore = this.state.score + 1;
		this.setState({
			score: newScore 
		});

		// Passes new score
		this.increaseLives(newScore);
	}

	// Player predicted incorrectly
	predictedIncorrectly() {
		let newLives = this.state.lives - 1;

		// If greater or equal to 0 keep playing
		// Otherwise game ends
		if(newLives >= 0) {
			this.setState({
				lives: newLives
			});	
		} else {
			this.setState({
				playingMode:false	
			});	
			
		}
		
	}

	// Generate random number from 1 to 100
	randomize(equal = -1) {
		// If a number is passed it ensures the returned value is different
		let n;
		do {n = Math.floor(Math.random()*100)+1}while(n===equal);
		return n;
	}

	// Lets the parent know about the new score and player info
	// Re-renders to play again
	sendNewScoreAndRerender(data){
		// Add the score to the player info to pass to the parent (Main)
		data.score = this.state.score;

		//Lets the parent know about the new score and the player data
		this.props.whenEnding(data); 
		this.setState(this.setInitialState());
	}

	render () {

		let returnJSX;

		if (this.state.playingMode) {
			// Playing
			returnJSX = (<div className="playerContainer">
							<h3>Score: {this.state.score}</h3>
							<h1 className="currentNumber">{this.state.currentNumber}</h1>
							<div className="actionButtons">
								<ActionButton addClass="bigger" onClickEvent={this.compare.bind(this)} innerText="Bigger" pred="bigger" />
								<ActionButton addClass="smaller" onClickEvent={this.compare.bind(this)} innerText="Smaller" pred="smaller" />
							</div>
							<Lives amount={this.state.lives} />
						</div>);	
		} else {
			// Game ended
			returnJSX = (<div className="playerContainer">
							<h3>Score: {this.state.score}</h3>
							<h1 className="currentNumber">{this.state.currentNumber}</h1>
							<Form onSubmitEvent={this.sendNewScoreAndRerender.bind(this)} />
				  
						</div>);
		}
		
		return returnJSX;
	}
}

export default Player;