import React from 'react';

const Burgers =({ burgers }) => {
  const renderBurgers = burgers.map(burger =>
    <span key={burger.id}>{burger.name}-{burger.price}-{burger.description}-{burger.status}</span>
    )

    return (
      <div>
        {renderBurgers}
      </div>
    )
}

export default Burgers;