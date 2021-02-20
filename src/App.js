import React from 'react';
import Login from "./components/Login.js";
import Logout from "./components/Logout.js";
import { connect } from 'react-redux';
import { getCurrentUser } from "./actions/currentUser.js";
import Header from "./components/Header.js"
import Order from "./components/Order.js"
import AdminMenu from "./components/AdminMenu.js"

class App extends React.Component {

  componentDidMount(){
    this.props.getCurrentUser()
  }

  render () {
    return (
      <div className='burger-paradase'>
        <div className='menu'>
         <Header title="BrooklynBurger"/>
        </div>
        <Order />
        <AdminMenu />
        {this.props.currentUser ? <Logout/> : <Login/>}
      </div>
    );
  }
}

const mapStateToProps = ({ currentUser}) => {
  return {
    currentUser  //currentUser from redux
  }
}

export default connect (mapStateToProps, { getCurrentUser })(App);