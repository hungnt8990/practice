import * as ActionTypes from '../constants/actionTypes';

// AXIOS
import axios from 'axios'; //goi api
const apiUrl = 'https://cpcitpracticeapi.herokuapp.com/api';
const client = axios.create({
  baseURL: apiUrl,
  headers: {
    'Content-Type': 'application/json'
  }
});

// API
// ------------------------------------------------------------
export const createUserAsync = (email,password,fullname,phone) => {
  return (dispatch) => {
    dispatch(createUser_Pending());
    client.post('/signup', { email,password,fullname,phone })
      .then((response) => {
          if(response && response.data.success){
            dispatch(createUser_Success(response.data));
          }else{
              dispatch(createUser_Error(response.data.result));
          }
      })
      .catch((error) => {
        dispatch(createUser_Error(error));
      });
  };
}
// CÁC DISPATCH báo trạng thái của ASYNC
// Action Creator
const createUser_Success = (data) => ({
  type: ActionTypes.USER_CREATE_SUCCESS, // ACTION TYPE
  newUser: data // PARAMETER
});

// Action Creator
const createUser_Pending = () => ({
  type: ActionTypes.USER_CREATE_PENDING, // ACTION TYPE  
});

// Action Creator
const createUser_Error = (error) => ({
  type: ActionTypes.USER_CREATE_ERROR, // ACTION TYPE
  error: error // PARAMETER
});