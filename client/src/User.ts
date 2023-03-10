import { faker } from '@faker-js/faker'

class User {
  name: string
  location: {
    lat: number
    lng: number
  }
  constructor() {
    // (***) ctrl + click on "name" or "faker" to go to Type Def File
    this.name = faker.name.firstName()
    this.location = {
      lat: parseFloat(faker.address.latitude()), // because lng and lat of faker return string > need to parse
      lng: parseFloat(faker.address.longitude()),
    }
  }
}
