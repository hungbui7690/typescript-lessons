/// <reference types="@types/google.maps" />

/*
  Duplication Code
  - now if we create addCompanyMarker > it will have the same structure as addUserMarker()
    > duplicated codes > fix in next lesson

  (1) CustomMap
*/

import { CustomMap } from './CustomMap'
import { User } from './User'
import { Company } from './Company'

function initMap(): void {
  const user = new User()
  const company = new Company()
  const customMap = new CustomMap('map')

  customMap.addUserMarker(user)
  customMap.addCompanyMarker(company) // (***)
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
