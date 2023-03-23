/// <reference types="@types/google.maps" />

/*
  Updating Interface Definitions P1
  - depends on each object, will display different message on infoWindow

*/

import { CustomMap } from './CustomMap'
import { User } from './User'
import { Company } from './Company'

function initMap(): void {
  const user = new User()
  const company = new Company()
  const customMap = new CustomMap('map')

  // *** err
  customMap.addMarker(user)
  customMap.addMarker(company)
}

declare global {
  interface Window {
    initMap: () => void
  }
}
window.initMap = initMap
export {}
