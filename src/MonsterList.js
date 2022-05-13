import React from 'react';
import Monster from './Monster';

export default function MonsterList({ monsters }){
  return (
    <div className='monsters'>
      {
        monsters.map(monster => <Monster key={monster.name} monster={monster}/>)
      }
    </div>
  );
}