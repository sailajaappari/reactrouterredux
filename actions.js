

//Action Types
//Users
const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS';
const DELETE_USER_SUCCESS = 'DELETE_USER_SUCCESSe;'

//Search Layout
const LOAD_SEARCH_LAYOUT = 'LOAD_SEARCH_LAYOUT';


//User Actions

export function getUsersSuccess(users) {
  return ({
    type: GET_USERS_SUCCESS,
    users
  });
}

export function deleteUserSuccess(userId) {
  return ({
    type: DELETE_USER_SUCCESS,
    userId
  });
}


//Search Layout
export function loadSearchLayout(searchType, title) {
  return ({
    type: LOAD_SEARCH_LAYOUT,
    searchType,
    title
  });
}
