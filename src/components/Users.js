import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router'

export default class Users extends Component {

  render () {
    return (
      <div>
        <h1>Users</h1>
        <div className="master">
          <ul>
            {this.state.users.map(user => (
              <li key={user.id}><Link to={`/user/${user.id}`}>{user.name}</Link></li>
            ))}
          </ul>
        </div>
        <div className="detail">
          {this.props.children}
        </div>
      </div>
    );
  }

  constructor (props, context) {
    super(props, context);

    this.state = {
      users: [
        { id: 0, name: 'Steven Iseki' }, 
        { id: 1, name: 'James Z' }
      ]
    }

  }

}
