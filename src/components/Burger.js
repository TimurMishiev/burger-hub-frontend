import React from 'react';

class Burger extends React.Component {
  handleClick = () => {
    this.props.addToOrder(this.props.index)
  }
  render() {
    const isAvalable = this.props.status === 'available'
    return <li className='menu-burger'>
      <div className='image-container'>
        <img src={this.props.image}  
        alt={this.props.name}/>
      </div>
      <div className='burger-details'>
        <h3 className='burger-name'>{this.props.name}
        <span className='price'>💲{this.props.price}</span>
        </h3>
        <p>{this.props.description}</p>
        <button 
        className='buttonOrder'
        disabled={!isAvalable}
        onClick={() => this.props.addToOrder(this.props.index)}
        >
          { isAvalable ? '+Add' : 'Temporary not available'}
          </button>
      </div>
   
    </li>
  }
}
export default Burger;