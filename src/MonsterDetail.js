import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getMonster } from './services/fetch-utils';


export default function MonsterDetail() {
  const params = useParams();
  const [monsterDetail, setMonsterDetail] = useState({});
  
  console.log(params);
  useEffect(() => {
    async function loadNpc(){
      const npcData = await getMonster(params.id);
      setMonsterDetail(npcData);
    }
    loadNpc();
  }, [params.id]);
  
  return (
    <>
      <Link to='/'>Home</Link>
      <div className='monster-data'>        
        <p>Name: {monsterDetail.name}</p>
        <p>Size: {monsterDetail.size}</p>
        <p>Type: {monsterDetail.type}</p>
        <p>Alignment: {monsterDetail.align}</p>
        <p>Armor Class: {monsterDetail.ac}</p>
        <p>HP: {monsterDetail.hp}</p>
        <p>Speeds: {monsterDetail.speeds}</p>
        <p>Strength: {monsterDetail.str}</p>
        <p>Dexterity: {monsterDetail.dex}</p>
        <p>Constitution: {monsterDetail.con}</p>
        <p>Intelligence: {monsterDetail.int}</p>
        <p>Wisdom: {monsterDetail.wis}</p>
        <p>Charisma: {monsterDetail.cha}</p>
        <p>Saving Throws: {monsterDetail.sav_throws}</p>
        <p>Skills: {monsterDetail.skills}</p>
        <p>Books: {monsterDetail.wri}</p>
        <p>Senses: {monsterDetail.senses}</p>
        <p>Languages Known: {monsterDetail.languages}</p>
        <p> CR: {monsterDetail.cr}</p>
        <p>Additional Details: {monsterDetail.additional}</p>
      </div>
    </>
  );
}