import request from 'superagent'
import { Character } from '../models'

// export async function getGreeting(): Promise<string> {
//   const res = await request.get('/api/v1/greeting')
//   return res.body.greeting
// }

export async function getDcCharacter(): Promise<string> {
  const res = await request.get('https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json')
  const dcOnly = res.body.filter((dc: Character)=> dc.biography.publisher === "DC Comics")
  return dcOnly
}