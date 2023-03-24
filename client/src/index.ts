/*
  Type Definition Files Again P1
  - check csv file > each row represents a football match
  - will use nodeJS standard library to load data
    > https://nodejs.org/dist/latest-v18.x/docs/api/fs.html
      > readFileSync()

*/

import { readFileSync } from 'fs' // error > this is because TS reports the wrong error for us > pic
