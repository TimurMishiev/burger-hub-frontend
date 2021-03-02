import React from 'react';
import AddBurgerForm from '../components/AddBurgerForm';
import EditBurgerForm from './EditBurgerForm';


class MenuAdmin extends React.Component {
  render() {
    return ( 
    <div className='menu-admin'>
      <h2>Menu Control</h2>
       {this.props.burgers.map(burger => {
         return (
         <EditBurgerForm 
              key={burger.id}
              index={burger.id}
              name={burger.name}
              price={burger.price}
              description={burger.description}
              status={burger.status}
              image={burger.image}
            // burger={this.props.burgers[burger]}
            // updateBurger={this.props.updateBurger}
          />
          );
       })}
      
      <AddBurgerForm addBurger={this.props.addBurger}/>
      {/* <button onClick={this.props.loadBurgers}>Load Burgers</button> */}

    </div>
    )
  }
}

export default MenuAdmin;
