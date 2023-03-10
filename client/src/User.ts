import { faker } from '@faker-js/faker'

// (1)
export class User {
  name: string
  location: {
    lat: number
    lng: number
  }
  constructor() {
    this.name = faker.name.firstName()

    // (***) we cannot use this.location.lat = fake... > err > since we haven't initialize this.location > use the way below : initialize location
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    }
  }
}
