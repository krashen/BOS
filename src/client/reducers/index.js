import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import scores from './scores';

const rootReducer = combineReducers({scores, router: routerReducer});

export default rootReducer;

