import { ADDITION, SUBTRACTION } from "./actionType";

// actions.js

export const add = (value) => ({
  type: ADDITION,
  payload: value,
});

export const subtract = (value) => ({
  type: SUBTRACTION,
  payload: value,
});
