import React from 'react';
import Burger from './Burger';
import Header from './Header';
import Order from './Order';
import MenuAdmin from './MenuAdmin';
import GetBurgers from '../actions/getBurgers';
import CreateBurger from '../actions/createBurger';
import LoginUser from './LoginUser'
import Logout from './Logout'



class App extends React.Component {
 

  state = {
    burgers: [],
    order: {}
  };


  addBurger = burger => {
    // CreateBurger.postBurger(burger).then(burger => console.log("Created Burger", burger))
    CreateBurger.postBurger(burger).then(burger => this.setState({
      burgers: this.state.burgers.concat(burger)
    }))
  }

  // deleteBurger = (key) => {
  //   const burgers = { ...this.state.burgers };

  //   delete burgers[key]
  
  // };



  addToOrder = (key) => {
    // make a  copy of a state object 
    const order = {...this.state.order}
    // add a key to an order with 1 , or reshresh current state of an order
    order[key] = order[key] + 1 || 1;
    // add new order object to state of an order 
    this.setState({ order: order })

  };
  

  deleteFromOrder = key => {
    const order = { ...this.state.order };
    delete order[key]
    this.setState({ order: order })
    // this.setState( { order });
  };

  // updateBurger = (key, updatedBurger) => {
  //   const burgers = {...this.state.burgers }; 
  //   burgers[key] = updatedBurger;

  //   this.setState({ burgers });
  // }

 


 
  componentDidMount() {
     GetBurgers.fetchBurgers()
     .then(burgers => this.setState({ burgers }))
  }


  render() {
    return (
      <LoginUser>
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
          <Order 
            deleteFromOrder={this.deleteFromOrder}
            burgers={this.state.burgers} 
            order={this.state.order}
          />
           
            <MenuAdmin 
            
              addBurger={this.addBurger}
              
              burgers={this.state.burgers}
              // updateBurger={this.updateBurger}
            
            /> 
       
         
        </div>
        </LoginUser>
    );
  }
}


export default App;