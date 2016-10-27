import {createStore, compse} from 'redux';

// Import the reducers
import rootReducers from './reducers/index';

// Data
import scores from './data/scores';

const defaultState = {
	scores
};

const store = createStore(rootReducers, defaultState);

export default store;

