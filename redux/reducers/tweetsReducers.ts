import { combineReducers } from 'redux';
import * as types from '../actions/types';

// COUNTER REDUCER
export const counterReducer = (state = 0, { type }) => {
  switch (type) {
    case types.INCREMENT:
      return state + 1;
    case types.DECREMENT:
      return state - 1;
    case types.RESET:
      return 0;
    default:
      return state;
  }
};

// INITIAL TIMER STATE
const initialTimerState = {
  lastUpdate: 0,
  light: false,
};

// TIMER REDUCER
export const timerReducer = (state = initialTimerState, { type, payload }) => {
  switch (type) {
    case types.TICK:
      return {
        lastUpdate: payload.ts,
        light: !!payload.light,
      };
    default:
      return state;
  }
};

const INITIAL_STATE = { name: 'Donald Trump' };

export const toggleNameReducer = (
  state = INITIAL_STATE,
  action: { type: string }
) => {
  switch (action.type) {
    case types.TOGGLE:
      if (state.name === 'Donald Trump')
        return { ...state, name: 'Hilary Clinton' };
      return { ...state, name: 'Donald Trump' };
    default:
      return { ...state };
  }
};
