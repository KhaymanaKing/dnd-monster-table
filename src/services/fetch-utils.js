import { client, checkError } from './client';

export async function getMonsters(start = 1, end = 10){
  const response = await client 
    .from('monster_table')
    .select()
    .range(start, end);
  return checkError(response);
}

export async function getMonster(id){
  const response = await client
    .from('monster_table')
    .select()
    .match({ id })
    .single();
  return checkError(response);
}