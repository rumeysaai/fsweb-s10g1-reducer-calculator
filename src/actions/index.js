export const ADD_ONE = "ADD_ONE";

export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const STORE_MEMORY = "STORE_MEMORY";
export const MEMORY_RESET = "MEMORY_RESET";
export const MEMORY_TOTAL = "MEMORY_TOTAL";
export const CLEAR_DISPLAY = "CLEAR_DISPLAY";

export const addOne = () => {
  return ({ type: ADD_ONE });
}

export const applyNumber = (number) => {
  return ({ type: APPLY_NUMBER, payload: number });
}
export const changeOperation = () => {
  return ({ type: CHANGE_OPERATION });
}
export const memoryStore = () => {
  return ({ type: STORE_MEMORY });
}
export const memoryReset = () => {
  return ({ type: MEMORY_RESET });
}
export const memoryTotal = () => {
  return ({ type: MEMORY_TOTAL });
}
export const clearDisplay = () => {
    return ({ type: CLEAR_DISPLAY });
}