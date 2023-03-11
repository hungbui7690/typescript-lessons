/// <reference types="@types/google.maps" />

/*
  One Possible Solution
  - this solution works, but it has downside > pic: downside
    > later, if we want to add more class > we have to modify the definition + import in TS
    > the signature of the methods will be come huge as we have more classes 
    > also, it will create type coupling between Map.ts & the others
  
  (1) CustomMap
*/

import { CustomMap } from './CustomMap'
import { User } from './User'
import { Company } from './Company'

function initMap(): void {
  const user = new User()
  const company = new Company()
  const customMap = new CustomMap('map')

  customMap.addMarker(user)
  customMap.addMarker(company) // (***)
}

//////////////////////////////
//
//////////////////////////////
declare global {
  interface Window {
    initMap: () => void
  }
}
window.initMap = initMap
export {}
