import { UPDATE_FILTER } from "./actionTypes";

export function updateFilter(payload) {
  return {
    type: UPDATE_FILTER,
    payload
  };
}
