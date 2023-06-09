import {
  ADD_DATA_ERROR,
  ADD_DATA_REQUEST,
  ADD_DATA_SUCCESS,
  GET_DATA_ERROR,
  GET_DATA_REQUEST,
  GET_DATA_SUCCESS,
} from "./actionTypes"

const initialState = {
  isLoading: false,
  task: [],
  isError: false,
}

export const reducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case GET_DATA_REQUEST: {
      return {
        ...state,
        isLoading: true,
      }
    }
    case GET_DATA_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        task: payload,
      }
    }
    case GET_DATA_ERROR: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      }
    }
    case ADD_DATA_REQUEST: {
      return {
        ...state,
        isLoading: true,
      }
    }
    case ADD_DATA_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        task: [...state.task, payload],
      }
    }
    case ADD_DATA_ERROR: {
      return {
        ...state,
        isError: true,
      }
    }
    default:
      return state
  }
}