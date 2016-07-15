import { combineReducers } from 'redux'
import * as types from './actions'
import _ from 'lodash'

const intialState = [];

//Users Reducers
export const userReducer = function (state = initialState, action) {
  switch(action.type) {
    case types.GET_USERS_SUCCESS:
      return Object.assign({}, state, {users: action.users});
    case types.DELETE_USER_SUCCESS:
      const newUsers = _.filter(state.users, user => user.id != action.userId);
      return Object.assign({}, state, {users: newUsers});
    
  }
  return state;
}

 

