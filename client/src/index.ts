/// <reference types="@types/google.maps" />

/*
  Optional Implements Clauses P3

*/

import { CustomMap } from './CustomMap'
import { User } from './User'
import { Company } from './Company'

function initMap(): void {
  const user = new User()
  const company = new Company()
  const customMap = new CustomMap('map')

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
