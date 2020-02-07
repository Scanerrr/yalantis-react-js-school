import { UPDATE_FILTER } from "./actionTypes";

export function updateFilter(data) {
  return {
    type: UPDATE_FILTER,
    ...data
  };
}
