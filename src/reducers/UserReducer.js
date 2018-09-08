import * as ActionTypes from '../constants/actionTypes';

// DEFAULT STATE
const defaultState = {
  users: [],
  selectedUser: null,
  loading: false,
  error: null
};

const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    // GET USERS
    case ActionTypes.USER_GET_PENDING:
      return { ...state, loading: true };
    case ActionTypes.USER_GET_SUCCESS:
      return {
        ...state,
        users: action.users,
        loading: false,
        error: null
      };
    case ActionTypes.USER_GET_ERROR:
      return { ...state, error: action.error, loading: false };
    // ----------------------------------------------------
    // CREATE USER
    case ActionTypes.USER_CREATE_PENDING:
      return { ...state, loading: true };
    case ActionTypes.USER_CREATE_SUCCESS:
      var users = state.users;
      users.push(action.newUser);
      return {
        ...state,
        users: users,
        loading: false,
        error: null
      };
    case ActionTypes.USER_CREATE_ERROR:
      return { ...state, error: action.error, loading: false };
    // ----------------------------------------------------
    // DEFAULT
    default:
      return state;
  }
}

export default userReducer;

// Notes: 
// Object.assign method
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign

// Spread syntax:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax