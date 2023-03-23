/// <reference types="@types/google.maps" />

/*
  Implicit Type Checks
  - bts, TS will check if user/company satisfy addMarker()
  
//////////////////////////////////

  Showing Popup Windows
  - pic: we want to click on the marker to show the info of the location
    > https://developers.google.com/maps/documentation/javascript/infowindows

  - go to maps definition file and look for InfoWindow

  - CustomMap.ts

*/

import { CustomMap } from './CustomMap'
import { User } from './User'
import { Company } from './Company'

function initMap(): void {
  const user = new User()
  const company = new Company()
  const customMap = new CustomMap('map')

  // ***
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
