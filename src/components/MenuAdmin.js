import React from 'react';
import AddBurgerForm from '../components/AddBurgerForm';


class MenuAdmin extends React.Component {
  render() {
    return ( 
    <div>
      <h2>Menu Control</h2>
      <AddBurgerForm addBurger={this.props.addBurger}/>
      <button onClick={this.props.loadBurgers}>Load Burgers</button>

    </div>
    )
  }
}

export default MenuAdmin;
