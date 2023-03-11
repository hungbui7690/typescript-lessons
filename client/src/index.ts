/// <reference types="@types/google.maps" />

/*
  Hiding Functionality
  - pic > we can see that right now, we expose every methods of google map in index.ts
    > and those methods can break our app
    > we should create a class to hide the functionalities of google maps
  
  (1) create CustomMap.ts
*/

// (2)
import { CustomMap } from './CustomMap'

function initMap(): void {
  // (3)
  const map = new CustomMap('map')
}

//////////////////////////////
// if we create an interface in this file > it is just scoped to this module only > we use "declare global" to make it global > global namespace
// https://www.typescriptlang.org/docs/handbook/declaration-files/templates/global-modifying-module-d-ts.html

declare global {
  interface Window {
    initMap: () => void
  }
}
window.initMap = initMap
export {}
