import React from 'react';
import { Link } from 'react-router-dom';

export default function Monster({ monster }){
  return (
    <Link to={`/monsters/${monster.name}`}>
      <div className='monster'>
        <h3>{monster.name}</h3>
        <p>{monster.type}</p>
        <p>{monster.cr}</p>
      </div>
    </Link>
  );
}