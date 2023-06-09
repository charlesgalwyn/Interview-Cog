import axios from "axios"
import {
  ADD_DATA_ERROR,
  ADD_DATA_REQUEST,
  ADD_DATA_SUCCESS,
  GET_DATA_ERROR,
  GET_DATA_REQUEST,
  GET_DATA_SUCCESS,
} from "./actionTypes"



const getDataReq = () => {
  return {
    type: GET_DATA_REQUEST,
  }
}

const getDataSuccess = (payload) => {
  return {
    type: GET_DATA_SUCCESS,
    payload,
  }
}

const getDataError = () => {
  return {
    type: GET_DATA_ERROR,
  }
}

export const getData = () => (dispatch) => {
  dispatch(getDataReq())
  axios
    .get(`https://cognisite2.onrender.com/tasks`)
    .then((res) => {
      dispatch(getDataSuccess(res.data))
    })
    .catch((err) => {
      dispatch(getDataError(err))
    })
}

export const addData = (payload) => (dispatch) => {
  dispatch({
    type: ADD_DATA_REQUEST,
  })

  axios
    .post(`https://cognisite2.onrender.com/tasks`, payload)
    .then((res) => {
      dispatch({
        type: ADD_DATA_SUCCESS,
        payload: res.data,
      })
    })
    .catch((err) => {
      dispatch({
        type: ADD_DATA_ERROR,
      })
    })
}
