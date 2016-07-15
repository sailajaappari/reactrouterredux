import React from 'react'
import { Link } from 'react-router'
import { render } from 'react-dom'


export const Home = React.createClass({
  render: function () {
    return (
      <div>
        <h1>The app is now using Redux</h1>
       </div> 
    );
  }
}); 


export const UserList = React.createClass({
  render: function () {
    return (
      <ul>
       {this.props.users.map(this.createListItem)}
      </ul>
    );
  },
  createListItem: function (user) {
    return (
      <li key={user.id}>
        <Link to="{user.id}">{user.name}</Link>
      </li>
    );
  }
});

export const MainLayout = React.createClass({
  render: function () {
    return (
      <div>
        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/users">Users</Link></li>
        </ul>
        <div>{this.props.children}</div>       
      </div>
       
    );
  }
});


 

