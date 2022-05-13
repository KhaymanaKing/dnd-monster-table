import { client, checkError } from './client';

export async function getMonsters(start = 1, end = 10){
  const response = await client 
    .from('monster_table')
    .select()
    .range(start, end);
  return checkError(response);
}

export async function getMonster(name){
  const response = await client
    .from('monster_table')
    .select()
    .match({ name })
    .single();
  return checkError(response);
}