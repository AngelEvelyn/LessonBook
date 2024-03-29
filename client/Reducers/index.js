import { combineReducers } from 'redux';

// import all reducers here
import lessonReducer from './lessonReducer';


// combine reducers
const reducers = combineReducers({
  // if we had other reducers, they would go here
  lessons: lessonReducer,
});

// make the combined reducers available for import
export default reducers;