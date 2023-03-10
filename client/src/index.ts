/*
  Folder Structure
  > pic

  (1) create ./src/User.ts

////////////////////////////////////////////

  - In the upcoming lecture, we will be installing the Faker library. You may notice that the Github repository for Faker is empty or is displaying some confusing messaging. The library currently no longer exists and is not being maintained. However, as of today, it still exists in the NPM registry and we are able to install and use it in our projects by specifying the last known good version.

  - Please do the following prior to starting the next lecture:
    > npm install faker@5.5.3
    > npm install @types/faker@5.5.9

  - A community fork of Faker was made to save the project and they are actively working on some fixes and a fresh v6 release:

    https://github.com/faker-js/faker

  - If you wish to use this library instead, you can install it by running:

  - npm install @faker-js/faker

  - You'll then need to update your imports:

  - import { faker } from "@faker-js/faker";

  (***) As of their v6 release, TS support is now native and does not require installing the @types declarations.

  > https://github.com/faker-js/faker#typescript-support

*/

console.log('hello')
