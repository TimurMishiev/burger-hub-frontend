import React, { Component } from 'react';

class AddBurger extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      price: '',
      image: '',
      status: '',
      description: ''
    }
  }

  handleOnChange = event => {
    const {name, value} = event.target;
    this.setState({
      [name]: value 
    })
  }

  handleOnSubmit = event => {
    event.preventDefault();
    const burger = this.state;
    this.props.AddBurger(burger)

  }

  render() {
    return (
      <form onSubmit={this.handleOnSubmit}>
        <label htmlFor="burger_name">Name</label>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleOnChange}
            placeholder="Burger Name"
            />

        <label htmlFor="burger_price">Price</label>
          <input
            type="number"
            name="price"
            value={this.state.price}
            onChange={this.handleOnChange}
            placeholder="Price"
            />
          <button>+ADD BURGER</button>
      </form>
    )
  }

}

export default AddBurger;