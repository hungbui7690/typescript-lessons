import { User } from './User'
import { Company } from './Company'

export class CustomMap {
  private googleMap: google.maps.Map

  constructor(divId: string) {
    this.googleMap = new google.maps.Map(
      document.getElementById(divId) as HTMLElement,
      {
        zoom: 1,
        center: { lat: -22.344, lng: 131.031 },
      }
    )
  }

  // (***) we can use class as type
  addUserMarker(user: User): void {
    new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: user.location.lat,
        lng: user.location.lng,
      },
    })
  }

  addCompanyMarker(user: Company): void {}
}
