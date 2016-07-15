import { store } from './index'
import { getUsersSuccess } from './actions'
import { connect } from 'react-redux'
import React from 'react'
import { UserList } from './presentcomp'

var users = [
  {id: 1, name: "Jack"},
  {id: 2, name: "Smith"},
  {id: 3, name: "Jessica"}
];

const UserListContainer = React.createClass({
  componentDidMount: function() {
    store.dispatch(getUsersSuccess(users));
  },
  render: function() {
    return (
      <UserList users={userStore} />
    );
  }
});

const mapStateToProps = function(store) {
  return ({
    usersStore: store
  });
}

export default connect(mapStateToProps)(UserListContainer);
