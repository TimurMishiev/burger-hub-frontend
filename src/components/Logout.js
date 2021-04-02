import React from 'react';
import { connect } from 'react-redux';
import { logout } from "../actions/currentUser.js";

const Logout = ({ logout }) => {

  return (
    <form onSubmit={logout}>
      <input className='buttonLogout' type="submit" value="Log Out"/>
    </form>
    
  )
}

export default connect(null, { logout })(Logout)

//  To understand redux , and build this action I need :
//  1. action (creator)
// 2. another case statement in my currentUser reducer
