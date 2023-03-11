/// <reference types="@types/google.maps" />

/*
  Adding Markers

  (1) CustomMap
*/

import { CustomMap } from './CustomMap'
import { User } from './User'

function initMap(): void {
  const user = new User()
  const customMap = new CustomMap('map')

  // (***)
  customMap.addUserMarker(user)
}

//////////////////////////////
// add function to window object
//////////////////////////////
declare global {
  interface Window {
    initMap: () => void
  }
}
window.initMap = initMap
export {}
