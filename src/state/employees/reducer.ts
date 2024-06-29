import { UnknownAction } from 'redux';
import { ACTIONS, ACTION_TYPES } from './actions';

export const initialState: {} = {
  employees: []
};

type REDUCER_ACTIONS = { type: ACTION_TYPES, payload: any };

export function employeesReducer(state: {} = initialState, action: UnknownAction | REDUCER_ACTIONS): {} {
  switch (action.type) {
    case ACTIONS.SET_USERS:
      return {
        ...state,
        employees: action.payload.employees
      };
    default:
      return state;
  }
}

export default employeesReducer;
