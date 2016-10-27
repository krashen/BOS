var React = require('react');

class ScoresTable extends React.Component {
	constructor(props){
		super(props);

		// Since the scores are not begin get from an external API, this will initialize the list as empty
		this.scores = [];
	}
	componentWillUpdate(nextProps){
		// Sort score from highest to lowest
		this.scores = nextProps.scores.sort(compare);

		// Note for me: the sort method expects -1,0 or 1 to be returned
		function compare(a,b){
		 return (parseInt(a.score) - parseInt(b.score))*-1;	
		}

		// Pass only some elements.
		this.rows = [];
		for (let i in this.scores){
            // Breaks the list when max showed items are reached
            if(i == 10){
				break;
			}

			this.rows.push(<div key={i}>
							{this.scores[i].score}
							{this.scores[i].name}
							{this.scores[i].comment}
						   </div>);
		}
	}
	render(){
		return (
			<aside className="alert alert-success highestScore">
				{this.rows}	
			</aside>
		);	
	}
}

export default ScoresTable;
