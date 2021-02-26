import React from 'react';
import Burgers from './Burgers';
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
   console.log('addBurger', burger);
   const burgers = {...this.state.burgers};
   burgers[`burger${Date.now()}`] = burger;
   this.setState({ burgers })
  }

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
            <Burgers burgers={this.state.burgers}/>
          </div>
          <Order/>
          <MenuAdmin addBurger={this.addBurger}
          loadBurgers={this.loadBurgers} />
          
       
        </div>
    
    );
  }
}


export default App;