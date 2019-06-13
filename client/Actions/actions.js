import * as types from "../constants/actionTypes"

export const addPlan = (plan) => ({
  type: types.ADD_PLAN,
  payload: plan,
});

export const login = () => ({
  type: types.LOGIN,
  
})

export const signup = () => ({
  type: types.SIGNUP,
  
})

export const search = (keyword) => ({
  type: types.SEARCH,
  payload: keyword,
})

export const username = (username) => ({
  type: types.USERNAME,
  payload: username

})

export const results = () => ({
  type: types.RESULTS
})