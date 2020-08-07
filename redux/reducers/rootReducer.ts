import { combineReducers } from 'redux';
import {
  toggleNameReducer,
  counterReducer,
  timerReducer,
} from './tweetsReducers';

// In this case, we are oly going to have one reducer, but for common practice we will
// proceed to combining reducers.
const rootReducer = combineReducers({
  counter: counterReducer,
  timer: timerReducer,
  politician: toggleNameReducer,
});

export default rootReducer;
