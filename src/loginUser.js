import React from 'react';
import Login from "./components/Login.js";
import Logout from "./components/Logout.js";
import { connect } from 'react-redux';
import { getCurrentUser } from "./actions/currentUser.js";


class loginUser extends React.Component {

  componentDidMount(){
    this.props.getCurrentUser()
  }

  render () {
    return (
     
        this.props.currentUser ? <Logout/> : <Login/>
     
    );
  }
}

const mapStateToProps = ({ currentUser}) => {
  return {
    currentUser  //currentUser from redux
  }
}

export default connect (mapStateToProps, { getCurrentUser })(loginUser);