import * as types from "../constants/actionTypes"

export const addPlan = (plan) => ({
  type: types.ADD_PLAN,
  payload: plan,
});

export const login = (user) => ({
  type: types.LOGIN,
  payload: user,
})

export const search = (keyword) => ({
  type: types.SEARCH,
  payload: keyword,
})

export const results = () => ({
  type: types.RESULTS
})