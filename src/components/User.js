import React, { Component, PropTypes } from 'react';

export default class User extends Component {

  render () {

    let userComponent = null

    if(this.state.user !== undefined){
      userComponent = ( <h2>{this.state.user.name}</h2> )
    }

    return (
      <div>
        {userComponent}
      </div>
    )
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

  componentDidMount() {
    // this would be a find user
    this.setState({
      user: this.state.users[0]
    })
  }

}
