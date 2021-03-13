import { combineReducers } from 'redux';
import generalReducer from './GeneralReducer';
import { GeneralState } from '../Actions/types';
// import reducer2 from './reducer2';
// import reducer3 from './reducer3';

/**
 * Combine Reducers - all reducers in one place !
 * 
 */
export default combineReducers({
   generalReducer,
    // reducer2,
    // reducer3
});

/**
 * Interface for React-Redux useSelector.
 * 
 * Syntax :
 *           reducerName: reducerStateInterface
 */
export interface TypedReducers {
    generalReducer: GeneralState;

}



