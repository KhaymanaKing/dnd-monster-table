import React from 'react';
import { Link } from 'react-router-dom';

export default function Monster({ name, cr, type }){
  return (
    <Link to={`/Monsters/${name}`}>
      <div>
        <p>{name}</p>
        <p>{type}</p>
        <p>{cr}</p>
      </div>
    </Link>
  );
}