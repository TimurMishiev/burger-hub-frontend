// functional componet
import React from 'react';

const Header = props => (

<header className='top'>
  <div className='wrap'>
    <div className='header-content>'>
      <div className='header-rating'>
        <div className='header-rating_tag'></div>
        <div className='header-rating_icon'>+++</div>
      </div>

      <div className='header-divider'>{props.title}</div>
      <h1 className='font-effect-fire-animation'>Burger Hub</h1>
      <span>
        Best burger in 
        <span className='sub-header'>#Brooklyn</span>
      </span>
    </div>
  </div>
</header>
);

export default  Header;