/*
  Annotations Around Objects
  
*/

const profile = {
  name: 'Alex',
  age: 20,
  job: 'dev',
  coords: {
    lat: 0,
    lng: 15,
  },
  setAge(age: number): void {
    this.age = age
  },
}

// Destructuring
const { age }: { age: number } = profile

const {
  coords: { lat, lng },
}: { coords: { lat: number; lng: number } } = profile

// error here: but can be ignore > since ts use this variable
const { name, job }: { name: string; job: string } = profile
