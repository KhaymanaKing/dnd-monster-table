import { useEffect, useState } from 'react';
import React from 'react';
import { getMonsters } from './services/fetch-utils';
import MonsterList from './MonsterList';

export default function MonstersPage(){
  const [monsters, setMonsters] = useState([]);
  const [page, setPage] = useState(1);
  const perPage = 10;

  useEffect(() => {
    async function fetch(){
      const start = page * perPage - perPage;
      const end = page * perPage;
      const npcs = await getMonsters(start, end);
      setMonsters(npcs);
    }
    fetch();
  }, [page]);
  return (
    <>
      <div> 
        <h3>Page {page}</h3>          
      </div>
      <div>
        <button disabled={page <= 1}
          onClick={() => setPage(page - 1)}>Go Back a Page</button>
        <button onClick={() => setPage(page + 1)}> Next Page </button>
        {/* {monsters.length && <MonsterList monsters={monsters}/>
        } */}
        <MonsterList monsters={monsters}/>
      </div>
    </>
  );
}
