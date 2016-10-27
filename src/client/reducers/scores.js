// This reducer will take a copy of current state
// and the action dispatched

function scores(state = [], action){
	switch(action.type){
		case 'ADD_SCORE':
			// Add score
			return [...state, {
				id:state.length,
				name: action.name,
				score: action.score,
				comment: action.comment
			}];
			
		default:
			return state;
	}
}

export default scores;