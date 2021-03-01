import React from 'react';


class Order extends React.Component {

  renderOrder = (key) => {
    const burger = this.props.burgers[key];
    const count = this.props.order[key];

    const isAvailable = burger && burger.status === 'available';
      if (!isAvailable) {
        return (
        <li className='unavalable'>
          Sorry, {burger ? burger.name : 'burger'} temporary sold out
        </li>
        );
      }

    return( 
    <li>
      <span>
        <span>{count}</span>
        item: {burger.name}
        <span>${count * burger.price}</span>
        <button className='cancelItem'>&times;</button>
      </span>
    </li>
    );
  };

  render() {
    const orderIds = Object.keys(this.props.order)
    const total = orderIds.reduce((prevTotal, key) => {
      const burger = this.props.burgers[key];
      const count = this.props.order[key];

      const isAvailable = burger && burger.status ==='available';
      if (isAvailable) {
        return prevTotal + burger.price * count;
      }

      return prevTotal 
    }, 0);
    return (
     <div className='order-wrap'>
     <h2>Your Order</h2>
     <ul className='order'>
       {orderIds.map(this.renderOrder)} 
     </ul>
     <div className='total'>
       <div className='total_wrap'>
         <div className='total_wrap-final'>
           Total: {total}
         </div>
       </div>
     </div>
     </div>
    );
  }
}
export default Order;