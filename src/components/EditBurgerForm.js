import React from 'react';

class EditBurgerForm extends React.Component {
handleChange = event => {
  
  const updatedBurger = {
    ...this.props.burger,
    [event.currentTarget.name]: event.currentTarget.value
   
  };
  this.props.updateBurger(this.props.index, updatedBurger)
};

  render () {
    return (
      <div className='burger-edit'>
        <input 
          onChange={this.handleChange}
          name ='name' 
          type = 'text' 
          value={this.props.name}
        />
        <input 
          onChange={this.handleChange}
          name ='price' 
          type ='text' 
          value={this.props.price}
        />
        <select 
          onChange={this.handleChange}
          name = 'status' 
          className='status' 
          value={this.props.status}
        > 
          <option value ='available'>Available</option>
          <option value ='unavailable'>Sold out</option>
        </select>
        <textarea 
        onChange={this.handleChange}
        name = 'description' value={this.props.description} />
        <input 
         onChange={this.handleChange}
         name = 'image' type='text' value={this.props.image} />
      </div>
    )
  }
}

export default EditBurgerForm; 