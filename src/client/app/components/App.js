import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actionCreators from '../../actions/actionCreators.js';
import Main from './Main';

function mapStateToProps(state){
	return {
		scores: state.scores
	}	
}

function mapDispatchToProps(dispatch){
	return bindActionCreators(actionCreators, dispatch);
}

const Scores = connect(mapStateToProps, mapDispatchToProps)(Main);

export default Scores;