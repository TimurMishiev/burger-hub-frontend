import React from 'react';
import Header from "./Header.js"
import Order from "./Order.js"
import AdminMenu from "./AdminMenu.js"
// import loginUser from '../loginUser.js';

class App extends React.Component {

  

  render () {
    return (
      <div className='burger-paradase'>
        <div className='menu'>
         <Header title="BrooklynBurger"/>
         {/* <loginUser /> */}
        </div>
        <Order />
        <AdminMenu />
        {/* <loginUser /> */}
      </div>
    );
  }
}


export default App;