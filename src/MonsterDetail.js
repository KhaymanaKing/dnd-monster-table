import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getMonster } from './services/fetch-utils';


export default function MonsterDetail() {
  const params = useParams();
  const [monsterDetail, setMonsterDetail] = useState({});

  useEffect(() => {
    async function loadNpc(){
      const npcData = await getMonster(params.id);
      setMonsterDetail(npcData);
    }
    loadNpc();
  }, [params]);
  console.log(monsterDetail);
  return (
    <>
      <Link to='/'>Home</Link>
      <div className='monster-data'>        
        <p>{monsterDetail.name}</p>
        <p>{monsterDetail.size}</p>
        <p>{monsterDetail.type}</p>
        <p>{monsterDetail.type}</p>
        <p>{monsterDetail.align}</p>
        <p>{monsterDetail.ac}</p>
        <p>{monsterDetail.hp}</p>
        <p>{monsterDetail.speeds}</p>
        <p>{monsterDetail.str}</p>
        <p>{monsterDetail.dex}</p>
        <p>{monsterDetail.con}</p>
        <p>{monsterDetail.int}</p>
        <p>{monsterDetail.wis}</p>
        <p>{monsterDetail.cha}</p>
        <p>{monsterDetail.sav_throws}</p>
        <p>{monsterDetail.skills}</p>
        <p>{monsterDetail.wri}</p>
        <p>{monsterDetail.senses}</p>
        <p>{monsterDetail.languages}</p>
        <p>{monsterDetail.cr}</p>
        <p>{monsterDetail.additional}</p>
      </div>
    </>
  );
}