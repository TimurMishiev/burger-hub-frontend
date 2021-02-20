import React from 'react';
import Header from "./Header.js"
import Order from "./Order.js"
import AdminMenu from "./AdminMenu.js"


class App extends React.Component {

  state = {
    burger: {},
    order: {}
  };

  addBurger = burger => {
    console.log('addBurger', burger);
    // 1. make a copy of a state object
    const burgers = {...this.state.burgers}
    //  add a new burger to the  burgers variable
     burgers[`burger${Date.now()}`] = burger;
     // 3. Add new burgers object  to state object
     this.setState({ burger: burgers});
  };

  render () {
    return (
      <div className='burger-paradase'>
        <div className='menu'>
         <Header title="BrooklynBurger"/>
        
        </div>
        <Order />
        <AdminMenu addBurger ={this.addBurger} />
     
      </div>
    );
  }
}


export default App;