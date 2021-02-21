import React from 'react';
import Order from './Order'
import Header from './Header';
import AdminMenu from './AdminMenu'
import Burgers from './Burgers'
import burgerAction from '../actions/burgerAction'



class App extends React.Component {
 
constructor() {
  super()

  this.state = {
    burgers: [],
    orders: {}
  }
}

componentDidMount(){
 burgerAction.fetchBurgers()
 .then(burgers => this.setState({ burgers }))
}

addMovie = movie => {
  burgerAction.createBurger(burger).then(burger => this.setState({
    burgers: this.state.burgers.concat(burger)
  }))
}


  
  render() {
    return(
    <div className='burger-paradise'>
      <div className='menu'>
        <Header title='Brooklyn Burgers' />
        
       
      </div>
     
      <Order />
      <AdminMenu/>
      <div>
        <Burgers burgers={this.state.burgers}/>
      </div>

      <div>
        <AddBurger addBurger={this.addBurger}/>
      </div>
    
    </div>
    );
  }
}

export default App; 