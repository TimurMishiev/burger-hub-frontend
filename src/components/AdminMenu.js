import React from 'react';
import AddBurgerForm from "./AddBurgerForm.js"


class AdminMenu extends React.Component {
  render() {
    return (
     <div className='menu-admin'>
       <h2> Menu Control </h2>
       <AddBurgerForm addBurger={this.props.addBurger}/>
     </div>
    );
  }
}
export default AdminMenu;