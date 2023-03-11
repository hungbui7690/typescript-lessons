/// <reference types="@types/google.maps" />

/*
  - This is google maps API key for this project
    > AIzaSyBNLrJhOMz6idD05pzfn5lhA-TAw-mAZCU

  - Add to html file: 
      <script
        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBNLrJhOMz6idD05pzfn5lhA-TAw-mAZCU&callback=initMap"
        defer
      ></script>
  
  - Example
    > https://developers.google.com/maps/documentation/javascript/examples/map-simple#maps_map_simple-javascript

///////////////////////////////////////////////

  Google Map Integration
  > pic: gg
  > npm install @types/google.maps

  - Steps: 
    - search "Maps Javascript API"
    - create new project 
    - generate API key

  (***) index.html > add script > defer
    > index.ts must be placed before google script since it require initMap() as callback function for google script
  
  (***) defer - async > check github: javascript-notes

  - go to dev tools > google > check if there is google object or not

///////////////////////////////////////////////

  Google Map with TS
  > npm install @types/google.maps

  - you will still see a TS error in your code editor: "Cannot find name 'google'.ts(2304)"
    > As the very first line in the index.ts file, you will need to add a triple slash directive:
        /// <reference types="@types/google.maps" />

///////////////////////////////////////////////

  Exploring Type Definition Files
  - go to google def file 
  - open pallette > Fold Level 2
    > check class Map + Marker > this is a way to understand what's inside google object

  - create div with id = map in html 
    > don't forget to add height to this div
  
*/

let map: google.maps.Map

function initMap(): void {
  map = new google.maps.Map(document.getElementById('map') as HTMLElement, {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  })
}

declare global {
  interface Window {
    initMap: () => void
  }
}
window.initMap = initMap
export {}
