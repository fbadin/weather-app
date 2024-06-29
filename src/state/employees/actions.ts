import { UnknownAction } from "@reduxjs/toolkit";

export const ACTIONS = {
  SET_USERS: "SET_USERS"
} as const;

export type ACTION_TYPES = keyof typeof ACTIONS;

export type SetUsersAction = {
  type: typeof ACTIONS.SET_USERS;
  payload: {};
} & UnknownAction;

export type EmployeeActions = SetUsersAction;

export const setUsers = (employees: {}): SetUsersAction => ({
  type: ACTIONS.SET_USERS,
  payload: employees
});
