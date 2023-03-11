export class CustomMap {
  // (1) private
  private googleMap: google.maps.Map

  // (2) pass ref to element we want to place the map in
  constructor(divId: string) {
    this.googleMap = new google.maps.Map(
      // (***) now we can use any div
      document.getElementById(divId) as HTMLElement,
      {
        zoom: 4,
        center: { lat: -2.344, lng: 131.031 },
      }
    )
  }
}
