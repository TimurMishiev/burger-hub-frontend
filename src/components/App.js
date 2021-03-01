import React from 'react';
import Burger from './Burger';
import Header from './Header';
import Order from './Order';
import MenuAdmin from './MenuAdmin';
import GetBurgers from '../actions/getBurgers';



class App extends React.Component {
 

  state = {
    burgers: [],
    order: {}
  };

  addBurger  = burger => {
    // here should be a post request 
   console.log('addBurger', burger);
   const burgers = {...this.state.burgers};
   burgers[`burger${Date.now()}`] = burger;
   this.setState({ burgers })
  }


  addToOrder = (key) => {
    // make a  copy of a state object 
    const order = {...this.state.order}
    // add a key to an order with 1 , or reshresh current state of an order
    order[key] = order[key] + 1 || 1;
    // add new order object to state of an order 
    this.setState({ order: order })

  };


  // loadBurgers = () => {
  //   this.setState({ burgers: Burgers})
  // }

  componentDidMount() {
     GetBurgers.fetchBurgers()
     .then(burgers => this.setState({ burgers }))
  }


  render() {
    return (
    
        <div className='burger-paradise'>
          <div className='menu'>
            <Header title='Hot Burgers' />
            <ul className='burgers'>
              {this.state.burgers.map(burger => {
                return <Burger 
                key={burger.id}
                index={burger.id}
                name={burger.name}
                price={burger.price}
                description={burger.description}
                status={burger.status}
                image={burger.image}
                addToOrder={this.addToOrder}
                 />;
              })}
            </ul>
           
          </div>
          <Order burgers={this.state.burgers} order={this.state.order}/>
          <MenuAdmin addBurger={this.addBurger}
          loadBurgers={this.loadBurgers} />
          
       
        </div>
    
    );
  }
}


export default App;