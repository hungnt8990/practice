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
export const getUsersAsync = (email,password) => {
  return (dispatch) => {
    dispatch(getUsers_Pending());
    client.post('/signin', { email: email,password: password })
    .then((response) => {
          console.log(response);
            if(response && response.data.success){
                dispatch(getUsers_Success(response.data));
            }else{
                dispatch(getUsers_Error(response.data.result));
            }
      })
    .catch((error) => {
      dispatch(getUsers_Error(error));});
  };
}
// CÁC DISPATCH báo trạng thái của ASYNC
const getUsers_Success = (data) => ({
  type: ActionTypes.USER_GET_SUCCESS, // ACTION TYPE
  users: data // PARAMETER
});

const getUsers_Pending = () => ({
  type: ActionTypes.USER_GET_PENDING, // ACTION TYPE  
});

const getUsers_Error = (error) => ({
  type: ActionTypes.USER_GET_ERROR, // ACTION TYPE
  error: error // PARAMETER
});
