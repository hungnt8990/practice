import { combineReducers } from 'redux';
import UserReducer from './UserReducer';
import UserSignUpReducer from './UserSignUpReducer';

const rootReducer = combineReducers({
  UserReducer,
  UserSignUpReducer
});

export default rootReducer;