import React from 'react';



const List = ({ items, name, price, todoClick  }) => (
  <div>
    <h2>{name}</h2>
    <ul>
      { items.map( item => <li key={item.id}>{item.name} ${item.price} </li>) }
    </ul>
  </div>
);

export default List;