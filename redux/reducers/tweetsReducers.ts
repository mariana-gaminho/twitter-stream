import * as types from '../actions/types';

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
