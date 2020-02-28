import {
  API_CALL_FAILURE,
  API_CALL_START,
  API_CALL_SUCCESS
} from "./actionTypes";

export function apiCallStart(payload) {
  return {
    type: API_CALL_START,
    payload
  };
}

export function apiCallSuccess(payload) {
  return {
    type: API_CALL_SUCCESS,
    payload
  };
}

export function apiCallFailure(payload) {
  return {
    type: API_CALL_FAILURE,
    payload
  };
}
