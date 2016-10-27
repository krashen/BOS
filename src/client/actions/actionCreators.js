// Add new score
export function addScore(score, name, comment){
	return {
		type: 'ADD_SCORE',
		score,
		name,
		comment
	}
}
