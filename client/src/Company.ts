import { faker } from '@faker-js/faker'
import { Mappable } from './CustomMap' // ***

// ***
export class Company implements Mappable {
  companyName: string
  catchPhase: string
  location: {
    lat: number
    lng: number
  }

  constructor() {
    this.companyName = faker.company.name()
    this.catchPhase = faker.company.catchPhrase()
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    }
  }

  markerContent(): string {
    return `
      <div>
        <h1>Company Name: ${this.companyName}</h1>
        <h3>CatchPhase: ${this.catchPhase}</h3>
      </div>
    `
  }
}
