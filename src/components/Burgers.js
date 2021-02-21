import React from 'react';

const Burgers = ({ burgers }) => {
  const renderBurgers = burgers.map(burger =>
    <p key={burger.id}>{burger.name}</p>
    )
    return (
      <div>
        {renderBurgers}
      </div>
    )
}

export default Burgers;