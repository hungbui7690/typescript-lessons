import { faker } from '@faker-js/faker'

export class Company {
  companyName: string
  catchPhase: string // we use the property of Faker package

  // though faker does not have these, but we need these info for later to display as a marker in the map
  location: {
    lat: number
    lng: number
  }

  constructor() {
    this.companyName = faker.company.name()
    this.catchPhase = faker.company.catchPhrase()

    // (***) like we learned, we need to initialize location first
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    }
  }
}
