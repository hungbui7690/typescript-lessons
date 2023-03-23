/// <reference types="@types/google.maps" />

/*
  Restricting Access with Interfaces
  - pic: interface
  - previous lecture > CustomMap needs to satisfy the User & Company structure 
    > now we will invert that > we want to make the User & Company satisfy the CustomMap 
    > use interface

  - CustomMap.ts

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
